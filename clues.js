/**
 * clues.js — Scavenger hunt content
 *
 * Each clue has:
 *   id     : number  — matches the grid button number (1–12)
 *   title  : string  — displayed at the top of the clue screen
 *   text   : string  — the written hint shown to the student
 *   image  : string|null — relative path to an image file, or null for placeholder
 *   answer : string  — the text the QR code encodes (case-insensitive comparison)
 *
 * Replace placeholder text, images, and answers before deploying!
 */
const CLUES = [
  {
    id: 1,
    title: "Clue 1",
    text: "This is where hungry students fuel up between classes. Look for the smell of fresh food and the sound of conversation.",
    image: /images/clue1.png,
    answer: "dining hall"
  },
  {
    id: 2,
    title: "Clue 2",
    text: "Books, quiet study nooks, and endless floors of knowledge — this building is a student's best friend at finals time.",
    image: null,
    answer: "library"
  },
  {
    id: 3,
    title: "Clue 3",
    text: "Whether you need a workout or want to cheer on your team, this facility is the heart of campus athletics.",
    image: null,
    answer: "recreation center"
  },
  {
    id: 4,
    title: "Clue 4",
    text: "This outdoor gathering space sits at the center of campus. Students cross it a dozen times a day without even thinking about it.",
    image: null,
    answer: "campus quad"
  },
  {
    id: 5,
    title: "Clue 5",
    text: "Looking for help with tuition, financial aid, or enrollment? This administrative building handles it all.",
    image: null,
    answer: "administration building"
  },
  {
    id: 6,
    title: "Clue 6",
    text: "Aspiring doctors, nurses, and scientists call this building home. It smells faintly of lab chemicals.",
    image: null,
    answer: "science building"
  },
  {
    id: 7,
    title: "Clue 7",
    text: "Artists, actors, and musicians gather here to rehearse and perform. Check the board out front for upcoming shows.",
    image: null,
    answer: "arts center"
  },
  {
    id: 8,
    title: "Clue 8",
    text: "This is where your professors hold their offices and where most of your lectures will take place.",
    image: null,
    answer: "lecture hall"
  },
  {
    id: 9,
    title: "Clue 9",
    text: "Feeling under the weather? This is the place to go for medical care right on campus.",
    image: null,
    answer: "health center"
  },
  {
    id: 10,
    title: "Clue 10",
    text: "Student clubs, organizations, and events are run out of this building. Check the bulletin boards — there's always something going on.",
    image: null,
    answer: "student union"
  },
  {
    id: 11,
    title: "Clue 11",
    text: "Buses stop here, bikes are parked here, and many students begin or end their day at this transit hub.",
    image: null,
    answer: "transit hub"
  },
  {
    id: 12,
    title: "Clue 12",
    text: "The final stop! This is where new students like you will be living for the next year. Welcome home.",
    image: null,
    answer: "residence hall"
  }
];
