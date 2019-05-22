// start game
alert("Welcome to Super WordGuess!")
alert("If you were an SNES fan back in the day, this game should be easy! Try to figure out what the hidden old-school Nintendo terms are. Ten missed letters in each word will cost you the round, so be careful!")
alert("Good luck!")

// generate hidden random word from word pool
var wordPool = [
  "super mario", 
  "luigi", 
  "bowser", 
  "Peach", 
  "link", 
  "zelda", 
  "metroid", 
  "samus", 
  "ridley", 
  "yoshi", 
  "castlevania", 
  "starfox", 
  "earthbound", 
  "donkey kong country",
  "battletoads",
  "nba jam"
]

var wordSelection = wordPool[Math.floor(Math.random() * wordPool.length)];

var availableGuesses = 10;
var guessesLeft = [];
var guessedLetters = [];
var wordInProgress = [];
var wins = [];
var losses = [];

// provide blank spaces for each word
// space count matches letter count
var wordPlaceholder = [];
for (var i = 0; i < wordSelection.length; i++) {
  wordPlaceholder[i] = "_";
}

// Create HTML Element for hangmanDiv
var hangmanDiv = document.getElementById("hangmanDiv") 

hangmanDiv.innerHTML=wordPlaceholder

// Guess letter
// Add "key up" event listener when guessing letter
document.addEventListener('keyup', function(event) {
  console.log(event.key) 
  // if(keyCode >= 97 && keyCode <= 122) {
  //   (event.key)
  // }
});
var guessedLetters = wordSelection.length -1;

// if letter matches, add to blank placeholder

// Check WIN or LOSS
// If word is completed with less than 10 incorrect guesses - WIN round
// Else, reload game