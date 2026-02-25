/* ── CONSTANTS ── */
const STORAGE_KEY = 'scavenger_hunt_progress';

/* ── STATE ── */
let currentClueId = null;  // id of the clue page currently shown
let scanner = null;         // Html5Qrcode instance when active

/* ── PROGRESS (persisted in localStorage) ── */
function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveProgress(progress) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {
    // Storage might be blocked by privacy settings — fail silently
  }
}

let progress = loadProgress();

/* ── SCREEN NAVIGATION ── */
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  // Scroll to top when switching screens
  window.scrollTo(0, 0);
}

function goHome() {
  stopScanner();
  currentClueId = null;
  renderGrid();
  showScreen('home-screen');
}

/* ── HOME GRID ── */
function renderGrid() {
  const grid = document.getElementById('clue-grid');
  grid.innerHTML = '';

  CLUES.forEach(clue => {
    const btn = document.createElement('button');
    const done = !!progress[clue.id];
    btn.className = 'grid-btn' + (done ? ' completed' : '');
    btn.textContent = done ? '✓' : String(clue.id);
    btn.setAttribute('aria-label', `Clue ${clue.id}${done ? ' — completed' : ''}`);
    btn.addEventListener('click', () => openClue(clue.id));
    grid.appendChild(btn);
  });

  // Show completion modal if all clues are done
  const allDone = CLUES.every(c => progress[c.id]);
  if (allDone) {
    document.getElementById('completion-modal').classList.remove('hidden');
  }
}

/* ── CLUE SCREEN ── */
function openClue(id) {
  currentClueId = id;
  const clue = CLUES.find(c => c.id === id);

  document.getElementById('clue-title').textContent = clue.title;
  document.getElementById('clue-text').textContent = clue.text;

  // Image: real file or placeholder
  const imgEl = document.getElementById('clue-image');
  if (clue.image) {
    imgEl.innerHTML = `<img src="${clue.image}" alt="Image hint for ${clue.title}" />`;
  } else {
    imgEl.innerHTML = `<span class="placeholder-label">&#128205; Clue Image</span>`;
  }

  // Reset inputs and feedback
  document.getElementById('answer-input').value = '';
  hideFeedback();

  showScreen('clue-screen');
}

/* ── FEEDBACK ── */
function showFeedback(message, type /* 'success' | 'error' */) {
  const el = document.getElementById('feedback');
  el.textContent = message;
  el.className = `feedback ${type}`;
}

function hideFeedback() {
  document.getElementById('feedback').className = 'feedback hidden';
}

/* ── ANSWER VALIDATION ── */
function checkAnswer(raw) {
  const clue = CLUES.find(c => c.id === currentClueId);
  if (!clue) return;

  const input    = raw.trim().toLowerCase();
  const expected = clue.answer.trim().toLowerCase();

  if (input === expected) {
    progress[currentClueId] = true;
    saveProgress(progress);
    showFeedback('Correct! Great job finding this spot! 🎉', 'success');
    // Brief pause so the student can read the feedback, then return home
    setTimeout(goHome, 1800);
  } else {
    showFeedback('That doesn\'t match — try again!', 'error');
  }
}

/* ── QR SCANNER ── */
function startScanner() {
  document.getElementById('scanner-overlay').classList.remove('hidden');

  scanner = new Html5Qrcode('qr-reader');

  scanner.start(
    { facingMode: 'environment' },   // back (rear) camera
    { fps: 10, qrbox: { width: 240, height: 240 } },
    (decodedText) => {
      // Successfully scanned a QR code
      stopScanner();
      checkAnswer(decodedText);
    },
    () => {
      // Scan attempt failed (no code in frame) — ignore, keep trying
    }
  ).catch(() => {
    stopScanner();
    showFeedback(
      'Could not access the camera. Please use the text field below instead.',
      'error'
    );
  });
}

function stopScanner() {
  document.getElementById('scanner-overlay').classList.add('hidden');
  if (scanner) {
    scanner.stop().catch(() => {});
    scanner = null;
  }
}

/* ── EVENT LISTENERS ── */
document.getElementById('back-btn').addEventListener('click', goHome);

document.getElementById('scan-btn').addEventListener('click', startScanner);

document.getElementById('cancel-scan-btn').addEventListener('click', stopScanner);

document.getElementById('submit-btn').addEventListener('click', () => {
  const val = document.getElementById('answer-input').value;
  if (val.trim()) checkAnswer(val);
});

document.getElementById('answer-input').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const val = e.target.value;
    if (val.trim()) checkAnswer(val);
  }
});

document.getElementById('modal-close-btn').addEventListener('click', () => {
  document.getElementById('completion-modal').classList.add('hidden');
});

document.getElementById('reset-btn').addEventListener('click', () => {
  if (confirm('Reset all progress? This cannot be undone.')) {
    progress = {};
    saveProgress(progress);
    renderGrid();
  }
});

/* ── INIT ── */
renderGrid();
