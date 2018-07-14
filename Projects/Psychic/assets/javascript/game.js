 // Global Variables
//**************************************************************************************************************** 
let wordOptions = ['france','china','southkorea','japan','australia','brazil','peru','canada','england','germany','poland','italy',
'ireland','pakistan','yemen','iraq','turkey','libya','egypt','nigeria','rwanda','tanzania','zimbabwe','senegal','mexico','vietnam',
'portugal','argentina', 'malaysia', 'tibet', 'haiti','panama','colombia', 'bolivia','israel','india','turkmenistan','lichtenstein','armenia',
'serbia', 'finland', 'belgium', 'macedonia', 'lebanon', 'mongolia', 'guatemala', 'mauritania', 'cameroon', 'uganda']
let chosenWord = ""
let wordletters = [];
let blanksNum = 0
let blanksLetters = [];
let wrongGuess = []

let winsNum = 0
let lossNum = 0
let guessRemain = 12;


var underscore = ['_', '_', '_'] 



 //Functions
//**************************************************************************************************************** 
const start = () => {
 chosenWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
wordletters = chosenWord.split('');
blanksNum = wordletters.length;


//reset

guessRemain = 12 
wrongGuess = []
blanksLetters = [] 

//determine number of blanks needed onscreen
for (var i = 0; i <blanksNum; i++ ) {
    blanksLetters.push(" _  ");
}


//DOM Manipulation
document.getElementById("blanksLetters").innerText = blanksLetters.join(" ")
document.getElementById("Guesses-remain").innerText = guessRemain;
document.getElementById("wins").innerText = "Wins: " + winsNum;
document.getElementById("losses").innerText = "Losses: " + lossNum;
document.getElementById("wrong-guesses").innerText = wrongGuess;
};

function checkLetters (letter){

    let letterExist = false;
   
    for (var i =0; i<blanksNum; i++) {
        if (chosenWord[i] == letterGuessed) {
            letterExist = true;
        }
    }
    if (letterExist){
        for (var i = 0; i<blanksNum; i++) {
            if  (chosenWord[i] === letterGuessed) {
           blanksLetters[i] = letterGuessed;
        }
    }
   
   }
   else {
       wrongGuess.push(letterGuessed);
   guessRemain--;
   }
};

const finishRound = () => {
    console.log("Win Count: " + winsNum + " | Loss Count: " +lossNum + " | Guesses Remaining: " + guessRemain);

    //check for a win
    if (letterExist.toString() == blanksLetters.toString()) {
        winsNum ++;
        alert("Great Job! You win.");
        document.getElementById("wins").innerText = wins;
    }
}


 //Main Processes
 //**************************************************************************************************************** 
 start ();



document.onkeyup = function(event) {
     letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);
    console.log(letterGuessed);
};


console.log(chosenWord);
console.log(wordletters);
console.log(blanksNum);
console.log(blanksLetters);
document.getElementById("blanksLetters").innerTe


//In homework video, teacher uses spans in the html doc. The spans
//have the ID that gets updated