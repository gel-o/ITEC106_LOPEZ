//choices array
const choices = ["rock","paper","scissor"];

//for Display
const yourDisplay = document.getElementById("yourDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const yourScoreDisplay = document.getElementById("yourScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

//score variable
let yourScore = 0;
let computerScore = 0;

//function to play the game
function playGame(yourChoice){

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result="";

    if(yourChoice === computerChoice){
        result = "IT'S A TIE";
    }
    else{
        switch(yourChoice){
            case "rock":
            result = (computerChoice === "scissor" )? "YOU WIN!" : "YOU LOSE!";
            break;

            case "paper":
            result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
            break;
            
            case "scissor":
            result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
            break;
        }
        
    }

//displacer for choices
    yourDisplay.textContent = `YOU: ${yourChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText","redText");

//for scoring and color
    switch(result){
        case "YOU WIN!":
            resultDisplay.classList.add("greenText");
            yourScore++;
            yourScoreDisplay.textContent = yourScore;
            break;
        case "YOU LOSE!":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }


}
