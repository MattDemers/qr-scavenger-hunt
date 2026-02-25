I work for a university's housing department. Yearly, we host a Move-In weekend event.

We'd like students to be able to learn about campus with a scavenger hunt, which gets them to different places on campus. The scavenger hunt's conclusion, if they finish the hunt, results in them getting ticket entries to a raffle.

We'd like to laminate some QR codes which we would place around campus.

We'd like to make a webapp, which requires no login/registration from the students. They would open the page, and proceed as follows:

1. They would open the page, and be presented with a grid of 12 buttons that are numbered 1 through 12. 
2. They tap on one of the buttons and are taken to a sub-page where they are given an image hint, along with a text hint, a button, and a text field. The button says "scan code".
3. When they tap the "Scan Code" button, their phone will prompt them to open their camera to scan a QR code. This may involve a browser permission.
4. They scan the QR Code. If the QR Code's resulting data (a word or text string) matches the "clue", they are given feedback that they've scanned the correct code.
5. The text field serves as a backup, so they can manually put the text string in for validation. If they scan the QR code with their camera (outside of the webapp's prompting) they will still be told the proper text string to input.
6. After completing a clue, they are brought back to the main screen, where the grid button is marked completed by coloring it green and adding a checkmark where the number was.

I have experience with HTML and CSS, but not building this kind of webapp. I need help to be able to do so.

Please ask any questions if you require clarification on design or infrastructure elements.

Cheating is not a huge concern, so I would prefer to have everything live locally on the student's phone in terms of memory and their progress. Students should be able to open the page again and have their progress saved, but this may be complicated by browser permissions and anti-spam/ad/cookie blockers.

An image mockup of the proposed process and visualization can be found at `app-mockup.png`.