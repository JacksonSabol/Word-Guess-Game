// Array of words to choose from
var wordsArray = ["spaceship", "planet", "orbit", "railgun", "alien", "invasion", "warpspeed", "reactor", "shields", "bridge"];

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
    // Hide Win/Lose message at the start of the next word to guess
    document.getElementById("game-over").innerHTML = " -------------------------------------- ";
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
            document.getElementById("generate-word").innerHTML = "o7 Captain. Press 1 to generate a new word.";
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
            // Push correctly guessed letters to their respective positions in the HTML
            document.getElementById("word-to-guess").innerHTML = " " + hiddenWord.join(" ");

            // If the user did not select a correct letter, letterMatch stays false and is referenced here
            if (letterMatch === false) {
                // Check to see if the letter has been guessed before
                if (incorrectLetters.includes(userGuess)) {
                    document.getElementById("generate-word").innerHTML = "Take it slow, Captain. You've already guessed that letter.";
                }
                // If it hasn't been guessed before, and isn't a correct letter, add it to the array of incorrect letters
                else {
                    incorrectLetters.push(userGuess);
                    // Output to HTML element
                    document.getElementById("user-guess").innerHTML = " " + incorrectLetters.join(" ");
                    // Subtract 1 from the number of user choices remaining
                    guessesRemaining--;
                    // Output to HTML element
                    document.getElementById("guesses-remaining").innerHTML = " " + guessesRemaining;
                    // Check if the user is out of guesses
                    if (guessesRemaining === 0) {
                        // Output lose message
                        document.getElementById("game-over").innerHTML = "YOU LOSE! The word you were trying to guess was:"
                        // Reveal full word to user
                        document.getElementById("word-to-guess").innerHTML = " " + randomWord;
                        // Add 1 to losses
                        losses++;
                        // Output added loss to HTML
                        document.getElementById("losses").innerHTML = " " + losses;
                        // Reset start message
                        document.getElementById("generate-word").innerHTML = "o7 Captain. Press 1 to generate a new word.";
                        // Reset random word
                        randomWord = "";
                    }
                }
            }
            // If all letters have been correctly guessed
            if (hiddenWord.join("") == randomWord) {
                // Add 1 to wins
                wins++;
                // Output added win to HTML
                document.getElementById("wins").innerHTML = " " + wins;
                // Output win message
                document.getElementById("game-over").innerHTML = "YOU WIN! I see a promotion in your near future!";
                // Reveal full word to user
                document.getElementById("word-to-guess").innerHTML = " " + randomWord;
                // Reset start message
                document.getElementById("generate-word").innerHTML = "o7 Captain. Press 1 to generate a new word.";
                // Reset random word
                randomWord = "";
            }
        }
        // If the user doesn't pretty a letter key, output message to the HTML
        else {
            document.getElementById("generate-word").innerHTML = "Press any letter key to make a guess, Captain.";
        }
    }
};

// Function to begin game
function beginGame() {
    // Hide Press 1 to start a game
    document.getElementById("generate-word").innerHTML = "";
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