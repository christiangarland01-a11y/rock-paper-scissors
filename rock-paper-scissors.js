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

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound() {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

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
    };

    for (let i = 1; i <= 5; i++){
        playRound();
    };

    console.log("The game is over!");
    if (humanScore === computerScore){
        console.log(`It's a tie! ${humanScore} to ${computerScore}`);
    } else {
        console.log(humanScore > computerScore ? 
            `Player wins! ${humanScore} to ${computerScore}` : 
            `Computer wins! ${computerScore} to ${humanScore}`);
    }
    return;
}

playGame();