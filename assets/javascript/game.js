// Array of words to choose from
var wordsArray = ["spaceship", "planet", "orbit", "railgun", "alien", "invasion", "warpspeed", "reactor", "shields", "bridge"];

// Start the game with a score of 0
var score = 0;

// Variable to hold the index of current word
var wordIndex = 0;

// Setting variables for wins, losses, and number of guesses remaining
var wins = 0;
var losses = 0;
var guessesRemaining = 10;
var randomWord = "";

// Set HTML elements to initial values
document.getElementById("wins").innerHTML = " " + wins;
document.getElementById("losses").innerHTML = " " + losses;
document.getElementById("guesses-remaining").innerHTML = " " + guessesRemaining;
document.getElementById("word-to-guess").innerHTML = "_";

// Create an array for letters guessed to reference if user pushes the same letter key again and to keep track of correct/incorrect guesses
// var lettersGuessed = []; // We dont need this anymore since the correct and incorrect letters are already being displayed
var correctLetters = [];
var incorrectLetters = [];

// Defining array of whitelisted letters to compare user's key input to
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {
    // Hide Press 1 to start a game
    document.getElementById("generate-word").innerHTML = "";

    // Determines which key was pressed.
    var userGuess = event.key;

    // Make lowercase just in case user has capslock on
    userGuess = userGuess.toLowerCase();

    // Begin game if no word is loaded and 1 is pressed- initiate function; inform user to press 1 to begin if they press anything else
    if (randomWord === "") {

        if (userGuess === "1") {
            beginGame();
        }
        else {
            document.getElementById("generate-word").innerHTML = "Press 1 to generate a new word";
        }

    }
    else {
        // Compare userGuess to array of whitelisted letters before continuing - if any keypress matches, the value will be greater than 1 and the work will continue
        if (letters.indexOf(userGuess) >= 0) {
            // Set default condition of false so if userGuess doesn't match a letter, we can reference the false condition after
            var letterMatch = false;
            // Compare all letters of the random word to the user's guess
            for (var j = 0; j < randomWord.length; j++) {
                // If 1 or more letters match, assign those indexed letters to hiddenWord so we can replace the underscores in the correct location on the DOM
                if (userGuess === randomWord[j]) {
                    hiddenWord[j] = userGuess;
                    letterMatch = true;
                }
            }
            document.getElementById("word-to-guess").innerHTML = " " + hiddenWord.join(" ");
        }
    }
    // consolelogs the key the user pressed (userGuess).
    console.log("User guess: " + userGuess);
    // console log correctLetters to test how things are working.
    // console.log("hiddenWord: " + hiddenWord); this throws an error so let's not include it and see what happens
    // same for letterMatch
    console.log("letterMatch: " + letterMatch);
    // same for incorrectLetters. 
    console.log("incorrectLetters: " + incorrectLetters);
    // same
    console.log("guessesRemaining: " + guessesRemaining);

    // make sure user is inputting keys that are letters. Otherwise output alert to press only letters
    // for (i = 0; i < letters.length; i++) {
    //     if (userGuess != letters[i]) { // compare to array of whitelisted letters or look up reject online
    //         alert("Please use letter keys to make a guess");
    //     }
    //     else {

    // Define variable to compare whether userGuess matches a letter in randomWord and output correct or incorrect
    // var letterMatch = false;
    // if (lettersGuessed.includes(userGuess)) {
    //     console.log("You've already guessed this letter - select a new letter");
    // }
    // else {
    //     for (j = 0; j < randomWord.length; j++) {
    //         // Compare if userGuess matches a letter in randomWord for every index equal to the letter length of randomWord
    //         if (userGuess === randomWord[j]) {
    //             // Set lettersGuessed to userGuess when correct to create array for reference if user pushes same key again; lettersGuessed[i] is for repeat letters in a word
    //             lettersGuessed[j] = userGuess;
    //             // Set correctLetters to the correct letters the user guessed
    //             correctLetters.push(j);
    //             // Set letterMatch to true when user guesses a letter correctly to output "correct guess"
    //             // letterMatch = true;
    //         }
    //     }
    //     // Console log letterMatch for testing
    //     // console.log("letterMatch: " + letterMatch);
    //     // console log correctLetters to test how things are working. It catalogues the index position of each correct letter 
    //     console.log("correctLetters: " + correctLetters);
    //     // same for lettersGuessed. This is conserved and can be used to compare lengths later for the win statement
    //     console.log("lettersGuessed: " + lettersGuessed);

    //     // When userGuess doesn't match any letters in the random word
    //     // if (letterMatch === false) {
    //     // Attempting to use for-loop for incorrect guesses
    //     for (k = 0; k < lettersGuessed.length; k++) {
    //         // Compare userGuess to the letters of the random word
    //         if (lettersGuessed[k] > -1) {
    //             // Add userGuess to end of lettersGuessed array when it's an incorrect guess as well
    //             incorrectLetters[k] = userGuess;
    //             // var lettersAdjusted = incorrectLetters.length
    //             // Set incorrectLetters to the correct letters the user guessed
    //             lettersGuessed.push(incorrectLetters);
    //             // subtract 1 from guessesRemaining to get 1 step closer to the end of the game
    //             guessesRemaining--
    //         }
    //     }
    //     // Target html and output message later when logic is done

    //     // End game once remaining guesses reaches 0
    //     if (guessesRemaining === 0) {
    //         losses++;
    //         console.log("You Lost!");
    //         // figure out how to reset the game here
    //     }

    //     // Compare length of correctLetters to the number of letters in the random word. If they're the same, the word was guessed correctly.
    //     if (correctLetters.length === randomWord.length) {
    //         wins++;
    //         console.log("You won!");
    //         // figure out how to reset the game here
    //     }

    //     // Problems to solve and pseudocode:
    //     // stop generating random word every time a letter is pressed 
    //     // Probably need to nest another if statement in the one above so that it compares multiple guesses to the same word before restarting
    //     // create an array for letters that have been guessed |done|
    //     // create an array for correct and incorrect letters
    //     // display correct number of "_" for each letter of each random word
    //     // save index location of correct letters to display correct letters instead of "_" in DOM
    //     // subtract from guessesRemaining after each round |done|
    //     // 
    // }
    // Console log letterMatch for testing
    // console.log("letterMatch: " + letterMatch);

};

// Function to begin game
function beginGame() {
    // Create random number to pick random index position in words array
    var randomIndex = Math.floor(Math.random() * wordsArray.length);
    // Use random index position to pick random word from array
    randomWord = wordsArray[randomIndex];
    // Create array with length of each, specific random word to output correct number of underscores
    hiddenWord = new Array(randomWord.length);
    // Set/reset incorrect choices array
    incorrectLetters = [];
    // Set/reset remaining choices array
    guessesRemaining = 10;

    // Set/reset/output the correct number of underscores for each random word
    for (var i = 0; i < hiddenWord.length; i++) {
        hiddenWord[i] = "_";
    }

    // Set/reset all HTML elements
    document.getElementById("word-to-guess").innerHTML = " " + hiddenWord.join(" ");
    document.getElementById("user-guess").innerHTML = " " + incorrectLetters.join(" ");
    document.getElementById("guesses-remaining").innerHTML = " " + guessesRemaining;
};