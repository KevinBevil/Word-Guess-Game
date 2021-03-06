// array to hold all the names of the orchestral instruments
var instrumentArray = ['violin', 'viola', 'cello', 'bass', 'flute', 'piccolo',
   'oboe', 'english horn', 'clarinet', 'bass', 'clarinet', 'bassoon',
   'contrabassoon', 'saxophone', 'trumpet', 'french horn', 'trombone', 'tuba',
   'celesta', 'piano', 'harpsichord', 'organ', 'synthesizer', 'harp', 'timpani',
   'snare drum', 'bass drum', 'cymbals', 'tambourine', 'triangle', 'xylophone',
   'glockenspiel', 'chimes', 'marimba', 'vibraphone'];



// function to choose random word from instrumentArray
function playNewWord(someArray) {
   return someArray[(Math.floor(Math.random() * someArray.length))];
}

// validates that user's guess is alpha
function validate(strValue) {
   var objRegExp = /^[a-z ]+$/;
   return objRegExp.test(strValue);
}

// secret word that the player is trying to discover
var secretWord = playNewWord(instrumentArray);
// generates a string of underscores separated by spaces equal to number of
// characters in secretWord
var secretWordToUnderscores = Array(secretWord.length).fill('_').join(' ');
// arr_secretWord is array where each element is a character of secretWord
var arr_secretWord = secretWord.split('');
// arr_secretWordToUnderscores is array where each element is an underscore
var arr_secretWordToUnderscores = secretWordToUnderscores.split(' ');

var stringOfRejectedLetters = '';



// hooks for wins, losses, secret word, number of guesses left, and letters
// already guessed
var winsElem = document.getElementById('wins');
var lossElem = document.getElementById('losses');
var secretWordElem = document.getElementById('secret-word');
var guessedLettersElem = document.getElementById('guessed-letters');
var guessesLeftElem = document.getElementById('num-of-guesses-left');
var gameOverUpdate = document.getElementById('game-over');


guessesLeftElem.textContent = 15;

var gameOver = false;
var guessesLeft = 15;


var winCounter = 0;
var lossCounter = 0;
if (!isNaN(localStorage.getItem('wins'))) {
   winCounter = localStorage.getItem('wins');
}
if (!isNaN(localStorage.getItem('wins'))) {
   lossCounter = localStorage.getItem('losses');
}
if (winCounter === null && lossCounter === null) {
   winCounter = 0;
   lossCounter = 0;
}
console.log(winCounter);
console.log(lossCounter);

// var winCounter = localStorage.getItem('wins');
// var lossCounter = localStorage.getItem('losses');
lossElem.textContent = lossCounter;
winsElem.textContent = winCounter;

console.log(secretWord);
document.onkeyup = function (event) {
   // simple wins and losses counters
   // variable to hold user's alpha guess
   if (gameOver == true) return;
   var userGuess = event.key;
   console.log(userGuess);
   var userGuessLowerCase = userGuess.toLowerCase();
   if (validate(userGuess) &&
      arr_secretWord.indexOf(userGuessLowerCase) === -1) {
      stringOfRejectedLetters = stringOfRejectedLetters + ' ' +
         userGuessLowerCase;
      guessedLettersElem.textContent = stringOfRejectedLetters;
      guessesLeft--;
   } else if (validate(userGuess)) {
      while (arr_secretWord.indexOf(userGuessLowerCase) !== -1) {
         var index = arr_secretWord.indexOf(userGuessLowerCase);
         arr_secretWordToUnderscores[index] = userGuessLowerCase;
         arr_secretWord[index] = '_';
      }
   }
   secretWordElem.textContent = arr_secretWordToUnderscores.join(" ");
   guessesLeftElem.textContent = guessesLeft;
   if (guessesLeft === 0) {
      lossCounter++;
      lossElem.textContent = lossCounter;
      gameOverUpdate.textContent = "Sorry!  Click button for next word.";
      document.getElementById("display-none-upon-losing").style.display =
         "none";
      document.getElementById("reload-button").style.display = "";
      gameOver = true;
   }
   if (arr_secretWordToUnderscores.indexOf('_') === -1) {
      winCounter++;
      winsElem.textContent = winCounter;
      gameOverUpdate.textContent = "You win!  Click button for next word.";
      document.getElementById("display-none-upon-losing").style.display =
         "none";
      document.getElementById("reload-button").style.display = "";
      gameOver = true;
   }
   // lossElem.textContent = lossCounter;
   // winsElem.textContent = winCounter;

   localStorage.setItem("wins", winCounter);
   localStorage.setItem("losses", lossCounter);

}
