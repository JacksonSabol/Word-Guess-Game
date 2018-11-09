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

// Create an array for letters guessed to reference if user pushes the same letter key again and to keep track of correct/incorrect guesses
var lettersGuessed = [];
var correctLetters = [];
var incorrectLetters = [];

// Defining array of whitelisted letters to compare user's key input to
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Define randomWord globally to use in loop; not sure I need to do this since I defined it in the function below
// var randomWord;
// Define a variable to compare the letters of a random word to the letters of the user's guess; not sure I need to do this for the same reason as above
// var randomWordLetters;

// Generate random index and word before function so it stops picking a new one every time a key is pressed
var randomIndex = Math.floor(Math.random() * wordsArray.length);
// Set randomWord to the random index position of wordsArray
var randomWord = wordsArray[randomIndex];
// Test randomWord generator
console.log(randomWord);

// Target ids in HTML here

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

    // Determines which key was pressed.
    var userGuess = event.key;

    // Make lowercase just in case user has capslock on
    userGuess = userGuess.toLowerCase();

    // inform user to press 1 to begin. I'll try to figure out how to do any key later
    // alert("Press 1 to begin");

    // Start game when the number 1 key is pressed
    // if (userGuess === "1") { // can reactivate this later when the script actually works. Consider using onkeyup or down so that any key could be pressed; or userGuess =/= ""
    // startGame();

    // consolelogs the key the user pressed (userGuess).
    console.log("User guess: " + userGuess);

    // make sure user is inputting keys that are letters. Otherwise output alert to press only letters
    // for (i = 0; i < letters.length; i++) {
    //     if (userGuess != letters[i]) { // compare to array of whitelisted letters or look up reject online
    //         alert("Please use letter keys to make a guess");
    //     }
    //     else {

    // Define variable to compare whether userGuess matches a letter in randomWord and output correct or incorrect
    var letterMatch = false;
    for (j = 0; j < randomWord.length; j++) {
        // Compare if userGuess matches a letter in randomWord for every index equal to the letter length of randomWord
        if (userGuess === randomWord[j]) {
            // Set lettersGuessed to userGuess when correct to create array for reference if user pushes same key again; lettersGuessed[i] is for repeat letters in a word
            lettersGuessed[j] = userGuess;
            // Set correctLetters to the correct letters the user guessed
            correctLetters.push(j);
            // Set letterMatch to true when user guesses a letter correctly to output "correct guess"
            letterMatch = true;
        }
    }
    // Console log letterMatch for testing
    console.log("letterMatch: " + letterMatch);
    // console log correctLetters to test how things are working. It catalogues the index position of each correct letter 
    console.log("correctLetters: " + correctLetters);
    // same for lettersGuessed. This is conserved and can be used to compare lengths later for the win statement
    console.log("lettersGuessed: " + lettersGuessed);

    // When userGuess doesn't match any letters in the random word
    if (letterMatch === false) {
        if (lettersGuessed.includes(userGuess)) {
            console.log("You've already guessed this letter - select a new letter"); // This isn't working for when the user picks a correct letter repeatedly 
            // need to base all of this on something besides letterMatch because it won't return to letterMatch === false now that I've removed the function aspect of it
        }
        else {
            // Add userGuess to end of lettersGuessed array when it's an incorrect guess as well
            lettersGuessed.push(userGuess);
            // subtract 1 from guessesRemaining to get 1 step closer to the end of the game
            guessesRemaining--
            // Target html and output message later when logic is done
            if (guessesRemaining === 0) {
                losses++;
                console.log("You Lost!");
                // figure out how to reset the game here
            }
        }

        // Problems to solve and pseudocode:
        // stop generating random word every time a letter is pressed 
        // Probably need to nest another if statement in the one above so that it compares multiple guesses to the same word before restarting
        // create an array for letters that have been guessed |done|
        // create an array for correct and incorrect letters
        // display correct number of "_" for each letter of each random word
        // save index location of correct letters to display correct letters instead of "_" in DOM
        // subtract from guessesRemaining after each round |done|
        // 
    }
    // Console log letterMatch for testing
    console.log("letterMatch: " + letterMatch);
    // console log correctLetters to test how things are working.
    console.log("correctLetters: " + correctLetters);
    // same for lettersGuessed. 
    console.log("lettersGuessed: " + lettersGuessed);
    // same
    console.log("guessesRemaining: " + guessesRemaining);

    // Compare length of correctLetters to the number of letters in the random word. If they're the same, the word was guessed correctly.
    if (correctLetters.length === randomWord.length) {
        wins++;
        console.log("You won!");
        // figure out how to reset the game here
    }
    // }
    // else {
    //     alert("Press 1 to begin game");
    // }
}


//     }
//     // Alert user to press 1 key to begin
//     else {
//     alert("Press 1 to begin!");
// }
// };

// Function to begin game
// function startGame() {
//     // Generate random index to call a random word from wordsArray
//     randomIndex = Math.floor(Math.random() * wordsArray.length);
//     // Set randomWord to the random index position of wordsArray
//     randomWord = wordsArray[randomIndex];
//     // Test randomWord generator
//     console.log(randomWord);
// }