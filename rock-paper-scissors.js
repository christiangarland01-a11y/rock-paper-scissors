const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");

const roundMessage = document.querySelector("#msg");
const playerScoreDisplay = document.querySelector("#playerScore");
const computerScoreDisplay = document.querySelector("#computerScore");

let playerScore = 0;
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

function playRound(btnPress) {
    let humanChoice = btnPress;
    let computerChoice = getComputerChoice();

    if (
        (humanChoice == "Rock" && computerChoice == "Scissors") ||
        (humanChoice == "Paper" && computerChoice == "Rock") ||
        (humanChoice == "Scissors" && computerChoice == "Paper")
    ) {
        roundMessage.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
    } else if(
        (computerChoice == "Rock" && humanChoice == "Scissors") ||
        (computerChoice == "Paper" && humanChoice == "Rock") ||
        (computerChoice == "Scissors" && humanChoice == "Paper")
    ) {
        roundMessage.textContent = `You loose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
    } else {
        roundMessage.textContent = "It's a tie! No points"
    };

    if (playerScore >= 5) {
        alert("Game is over. Player wins!")
        playerScore = 0;
        computerScore = 0;
        playerScoreDisplay.textContent = playerScore;
        computerScoreDisplay.textContent = computerScore;
        roundMessage.textContent = "";
    } else if(computerScore >= 5) {
        alert("Game is over. Computer wins!")
        playerscore = 0;
        computerScore = 0;
        playerScoreDisplay.textContent = playerScore;
        computerScoreDisplay.textContent = computerScore;
        roundMessage.textContent = "";        
    }
}
btnRock.addEventListener("click", () => playRound("Rock"));
btnPaper.addEventListener("click", () => playRound("Paper"));
btnScissors.addEventListener("click", () => playRound("Scissors"));