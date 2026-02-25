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
    text: "This is the clue text!",
    image: "images/clue1.jpg",
    answer: "residence hall"
  }
```

* `id` changes what is displayed on the button itself. You can change this to text by adding a string in quotes instead of a number (example: `id: "Test",`)
* `title` is what is displayed on the top bar when people tap on a clue.
* `text` is the "clue" text, giving the user an idea of where the QR code is hidden.
* `image` can either be a URL to an image file (preferably 1:1 ratio) or set to `null` to be hidden.
* `answer` is the text string used as an answer. It can either be passed to the site through a QR code scanner, or typed manually.

### Generating QR Codes

It is important to generate the QR code using the exact text that is placed in `answer`. You can generate this by searching for a "[plain text QR code generator](https://letmegooglethat.com/?q=plain+text+QR+code+generator)", or using the plain text option in the one you usually use. However, certain generators (like Adobe Express) only offer URL encoding.
