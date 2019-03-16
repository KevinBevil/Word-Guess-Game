// keeps track of number of wins
var winCounter;
// keeps track of number of losses
var lossCounter;
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
   var objRegExp = /^[a-z]+$/;
   return objRegExp.test(strValue);
}

// secret word that the player is trying to discover
var secretWord = playNewWord(instrumentArray);
// generates a string of underscores separated by spaces equal to number of
// characters in
// secretWord
var secretWordToUnderscores = Array(secretWord.length).fill('_').join(' ');
// arr_secretWord is array where each element is a character of secretWord
var arr_secretWord = secretWord.split('');
// arr_secretWordToUnderscores is array where each element is an underscore
var arr_secretWordToUnderscores = secretWordToUnderscores.split(' ');

var stringOfRejectedLetters = '';

// console.log("secretWord: " + secretWord + "secretWordToUnderscores: " +
// secretWordToUnderscores + "arr_secretWord: " + arr_secretWord +
// "arr_secretWordToUnderscores: " + arr_secretWordToUnderscores);

// hooks for wins, losses, secret word, number of guesses left, and letters
// already guessed
var winsElem = document.getElementById('wins');
var lossElem = document.getElementById('losses');
var secretWordElem = document.getElementById('secret-word');
var guessedLettersElem = document.getElementById('guessed-letters');
var guessesLeftElem = document.getElementById('num-of-guesses-left');
var gameOverUpdate = document.getElementById('game-over');


guessesLeftElem.textContent = 15;



var winCounter = 0;
var lossCounter = 0;
var guessesLeft = 15;

document.onkeyup = function (event) {
   // simple wins and losses counters
   // variable to hold user's alpha guess
   var userGuess = event.key;
   var userGuessLowerCase = userGuess.toLowerCase();
   if (validate(userGuessLowerCase) && 
   arr_secretWord.indexOf(userGuessLowerCase) === -1) {
      stringOfRejectedLetters = stringOfRejectedLetters + ' ' +
       userGuessLowerCase;
      guessedLettersElem.textContent = stringOfRejectedLetters;
      guessesLeft--;
   } else if (validate(userGuessLowerCase)) {
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
      gameOverUpdate.textContent = "Game Over.  Reload page to play again.";
      document.getElementById("display-none-upon-losing").style.display =
       "none";
   }
   if (arr_secretWordToUnderscores.indexOf('_') === -1) {
      winCounter++;

   }
   lossElem.textContent = lossCounter;
   winsElem.textContent = winCounter;
   document.cookie = 'cookieWins=winCounter';
   document.cookie = 'cookieLosses=lossCounter';
}
