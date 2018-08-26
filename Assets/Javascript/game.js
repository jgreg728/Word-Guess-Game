// start game
alert("Welcome to Super WordGuess!")
alert("If you were an SNES fan back in the day, this game should be easy! Try to figure out what the hidden old-school Nintendo terms are. Five missed letters in each word will cost you the game, so be careful!")
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



// var wordSelection = wordPool[Math.floor(Math.random() * wordPool.length)];


// // provide blank spaces for each word
//   // space count matches letter count
    
// var wordPlaceholder = [];
// for (var i = 0; i < wordSelection.length; i++) {
//   wordPlaceholder[i] = "_";
// }

// var hangmanDiv = document.getElementById("hangmanDiv") 

// hangmanDiv.innerHTML=wordPlaceholder

// document.addEventListener('keyup', function(event) {
//     console.log(event.key)
//     // // if (wordSelection.indexOf(event.key)!=-1) {
//     //  =
//     // }  
// })

// var remainingLetters = wordSelection.length

// // guess letter
// // if true, add to blank placeholder

// var keypressed = event.key;
// var guessesLeft = [];
// var guessedLetters = [event.key];
