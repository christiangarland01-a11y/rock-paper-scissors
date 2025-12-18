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
    let humanPrompt = prompt("Choose either Rock, Paper or Scissors");
    let humanChoice = "";

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