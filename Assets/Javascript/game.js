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

var wordSelection = wordPool[Math.floor(Math.random() * wordPool.length)];


// provide blank spaces for each word
  // space count matches letter count
    
var wordPlaceholder = [];
for (var i = 0; i < wordSelection.length; i++) {
  wordPlaceholder[i] = "_";
}

var hangmanDiv = document.getElementById("hangmanDiv") 

hangmanDiv.innerHTML=wordPlaceholder

document.addEventListener('keyup', function(event) {
    console.log(event.key)
    // // if (wordSelection.indexOf(event.key)!=-1) {
    //  =
    // }  
})

var remainingLetters = wordSelection.length;

// PROVIDE CLUE
  var clue = [
    "Give him a Super Star to help him win.", 
    "Always in his brother's shadow", 
    "Has kidnapped more princesses than anyone can count...", 
    "Usually needs saving.", 
    "Hero in green.", 
    "One would say she's legend...wait for it....DARY!", 
    "Pursued by the bounty hunter.", 
    "Bounty Hunter of the galaxy.", 
    "Not too big for Smash Bros after all.", 
    "Throws eggs and saves babies.", 
    "Killing vampires is the name of the game.", 
    "Do a barrel roll!", 
    "In a world where a mere boy saves the world from aliens...", 
    "Land of the apes",
    "Fighting Toads (and not the Mario kind of Toads...)",
    "BOOM SHAKALAKA!!"
  ]

// guess letter
// if true, add to blank placeholder

var keypressed = event.key;
var guessesLeft = []
var guessedLetters = [event.key];
if (!guessedLetters.includes(keypressed)) {
  // run with game logic
  for (var i = 0; i < wordSelection.length; i++) {
    if (wordSelection[i].toLowerCase() === keypressed.toLowerCase()) {
      placeholders[i] = keypressed;
    }
    else (guessedLetters.includes(keypressed) === null)
    if (guessesLeft === 0) {
      alert("GAME OVER")
  }
  }
   
  guessedLetters.push(keypressed);


//<input type="text" onkeyup="myFunction()">

//....

// while (remainingLetters > 0) {
//   var hangman = document.getElementById("hangmanDiv");
//   hangman.textContent = wordPlaceholder.join(" ");
//   var letterGuess = prompt("Please guess a letter.");
//   if (letterGuess === null) {
//     break;
//   }	
//   else if (letterGuess.length !==1) {
//     alert("Please enter a letter.");
//   }  
// // if already guessed, nothing happens
//   else {
//     for (var j = 0; j < word.length; j++) {
//       if (wordSelection[j] === letterGuess) {
//         wordPlaceholder[j] = letterGuess;
//         remainingLetters--;
//       }
//     }
//   }
// }

// alert(wordPlaceholder.join(" "));
// alert("Correct! The answer was " + wordSelection)
