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

    // This function is run whenever the user presses a key.
    document.onkeyup = function (event) {

        // Determines which key was pressed.
        var userGuess = event.key;

        // Make lowercase just in case user has capslock on
        userGuess = userGuess.toLowerCase();
  
        // Run function when any letter key is pressed
        if (userGuess >= 'a' && userGuess <= 'z') {
			startGame();
        }
        // Alert user to press any letter key to begin
		else {
			alert("Press any letter key to begin!");
		}
    };

    // Function to begin game
    function startGame () {
        // Generate random index to call a random word from wordsArray
        randomIndex = Math.floor(Math.random() * wordsArray.length);
        // Set randomWord to the random index position of wordsArray
        randomWord = wordsArray[randomIndex];
        // Test randomWord generator
        console.log(randomWord);
    }