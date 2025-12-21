let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerChoice = "";
    let randomNumber = Math.floor(Math.random()*3) + 1;
    
    if(randomNumber === 1){
        computerChoice = "Rock";
    } else if (randomNumber === 2){
        computerChoice = "Paper";
    } else if (randomNumber === 3) {
        computerChoice = "Scissors";
    }
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = ""; 
    let humanPrompt = prompt("Choose either Rock, Paper or Scissors");
    
    if(humanPrompt.toLowerCase() === "rock") {
        humanChoice = "Rock";   
    } else if(humanPrompt.toLowerCase() === "paper") {
        humanChoice = "Paper";
    } else if(humanPrompt.toLowerCase() === "scissors") {
        humanChoice = "Scissors";
    } else {
        humanChoice = null;
    }
    return humanChoice;
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "Rock") {
        if (computerChoice == "Scissors") {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore ++;
            return;
        } else if (computerChoice =="Paper") {
            console.log(`You loose! ${computerChoice} beats ${humanChoice}`);
            computerScore ++;
            return;
        } else {
            console.log("It's a tie! No points");
            return;
        };
    } else if (humanChoice == "Paper") {
        if (computerChoice == "Rock") {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore ++;
            return;
        } else if (computerChoice =="Scissors") {
            console.log(`You loose! ${computerChoice} beats ${humanChoice}`);
            computerScore ++;
            return;
        } else {
            console.log("It's a tie! No points");
            return;
        };
    } else if (humanChoice == "Scissors") {
        if (computerChoice == "Paper") {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore ++;
            return;
        } else if (computerChoice =="Rock") {
            console.log(`You loose! ${computerChoice} beats ${humanChoice}`);
            computerScore ++;
            return;
        } else {
            console.log("It's a tie! No points");
            return;
        };
    }
}

playRound(humanSelection, computerSelection);