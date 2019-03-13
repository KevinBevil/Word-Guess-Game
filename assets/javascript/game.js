// keeps track of number of wins
var winCounter;
// keeps track of number of losses
var lossCounter;
// array to hold all the names of the orchestral instruments
var instrumentArray = ['violin', 'viola', 'cello', 'bass', 'flute', 'piccolo', 'oboe', 'english horn', 'clarinet', 'bass', 'clarinet', 'bassoon', 'contrabassoon', 'saxophone', 'trumpet', 'french horn', 'trombone', 'tuba', 'celesta', 'piano', 'harpsichord', 'organ', 'synthesizer', 'harp', 'timpani', 'snare drum', 'bass drum', 'cymbals', 'tambourine', 'triangle', 'xylophone', 'glockenspiel', 'chimes', 'marimba', 'vibraphone'];

// object containing properties and method of the game
var gameState = {
   winCounter: 0,
   lossCounter: 0,

   playNewWord: function (someArray) {
      return someArray[(Math.floor(Math.random() * someArray.length))];
   }
}

var wordsToSpaces = function (someString) {
   // function that creates same number of spaces as letters in chosen word
   var strOfSpaces = '';
   for (var i = 0; i < someString.length; i++){
      strOfSpaces = strOfSpaces + '_ ';
   }
   return strOfSpaces;
}
// choose the word for the current gameplay
var wordChosen = gameState.playNewWord(instrumentArray);

// setting up the variables to manipulate the on-screen html text

var wordElem = document.getElementById('blanks-to-word').innerHTML;
var winsElem = document.getElementById('wins');
var lossElem = document.getElementById('losses');
var guessedLettersElem = document.getElementById('guessed-letters');
var guessesLeftElem = document.getElementById('num-of-guesses-left');

// console.log(wordsToSpaces(wordChosen));
// console.log(wordChosen);

wordElem.textContent = wordsToSpaces(wordChosen);


document.onkeyup = function (event) {
   var userKey = event.key;




}







