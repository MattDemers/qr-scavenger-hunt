# QR Code Scavenger Hunt

This is a simple skeleton for a QR Code Scavenger hunt webapp. My usecase is as follows:

1. I want the ability to make a grid of clues for the scavenger hunt. The user would tap into a clue.
2. The clue screen would show a text clue, but also an image (optional).
3. The clue screen gives two options for completion: scanning a QR code with their phone's camera, or inputting a text string.
4. When successful, the user is given feedback and taken back to the main screen. Their progress is shown and saved.
5. When the user finishes, a message is displayed.

This was made with the aid of Claude Code. 

## Instructions

To add new clues, edit `clues.js`:

```json
  {
    id: 1,
    title: "Clue 1",
    text: "This is where hungry students fuel up between classes. Look for the smell of fresh food and the sound of conversation.",
    image: "images/clue1.jpg",
    answer: "dining hall",
    aliases: ["the dining hall", "dining", "caf", "cafeteria"],
    useqr: true
  }
```

* `id` changes what is displayed on the button itself. You can change this to text by adding a string in quotes instead of a number (example: `id: "Test",`)
* `title` is what is displayed on the top bar when people tap on a clue.
* `text` is the "clue" text, giving the user an idea of where the QR code is hidden.
* `image` can either be a URL to an image file (preferably 1:1 ratio) or set to `null` to be hidden.
* `answer` is the text string used as an answer. It can either be passed to the site through a QR code scanner, or typed manually.
* `aliases` can be set for alternative, accepted answers, or left blank (example: `aliases: []`). Best used for text, rather than QR codes.
* `useqr` can be set to `false` in order to remove the QR code scanner button, and only rely on text answers.

The grid will auto-resize based on the amount of clues.

When adding more clues, make sure to add commas between curved brackets, and make sure the last clue doesn't have one. See below, where clue `11` has a comma after its curved bracket, and no comma after the `12`, the final clue.

```json
  {
    id: 11,
    title: "Clue 11",
    text: "Buses stop here, bikes are parked here, and many students begin or end their day at this transit hub.",
    image: null,
    answer: "transit hub",
    aliases: [],
    useqr: true
  },
  {
    id: 12,
    title: "Clue 12",
    text: "The final stop! This is where new students like you will be living for the next year. Welcome home.",
    image: null,
    answer: "residence hall",
    aliases: [],
    useqr: true
  }
];

```

### Generating QR Codes

It is important to generate the QR code using the exact text that is placed in `answer`. You can generate this by searching for a "[plain text QR code generator](https://letmegooglethat.com/?q=plain+text+QR+code+generator)", or using the plain text option in the one you usually use. However, certain generators (like Adobe Express) only offer URL encoding.