# Welcome!

### The following project is Sci-Fi themed, Hangman-style word guessing game



I employed HTML, CSS, and JavaScript to make a 'Hangman' style word-guess game. The point of this exercise was to use JavaScript logic to compare user input to established arrays of words, and the letters of those words. I employed the use of conditional statements and for loops to compare letters of words, then output the response to a Bootstrap Jumbotron. Then I used a function to start and reset the game upon a win or a loss. The code snippets below exemplify how to choose a random word from an array and compare the letters to the user's input:


```javascript

function beginGame() {
    var randomIndex = Math.floor(Math.random() * wordsArray.length);
    randomWord = wordsArray[randomIndex];
    hiddenWord = new Array(randomWord.length);
    incorrectLetters = [];
    guessesRemaining = 10;
}
for (var j = 0; j < randomWord.length; j++) {
    if (userGuess === randomWord[j]) {
        hiddenWord[j] = userGuess;
        letterMatch = true;
    }
}
```

### Feel free to play around with the game by pressing 1 to start a new game, then typing letters to guess the word!

[Link to my Assignment!](https://jacksonsabol.github.io/Word-Guess-Game/)

<br>
Thank you for reading!