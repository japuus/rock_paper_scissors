const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const random = Math.floor(Math.random() * options.length);
    return options[random];
    }

const playerSelectionCase = "rock";
const playerSelection = playerSelectionCase.toLowerCase();
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    console.log("You say", playerSelection);
    console.log("Computer says", computerSelection);
    if (computerSelection == "paper" && playerSelection == "rock") {
        return "You lose! Paper beats rock";
    } else if (computerSelection == "rock" && playerSelection == "rock") {
        return "It's a tie!";
    } else if (computerSelection == "scissors" && playerSelection == "rock") {
        return "You won! Rock beats scissors!"
    } else if (computerSelection == "paper" && playerSelection == "paper") {
        return "It's a tie";
    } else if (computerSelection == "rock" && playerSelection == "paper") {
        return "You won! Paper beats rock";
    } else if (computerSelection == "scissors" && playerSelection == "paper") {
        return "You lose! Scissors beats paper!"
    } else if (computerSelection == "paper" && playerSelection == "scissors") {
        return "You win! Scissors beats paper";
    } else if (computerSelection == "rock" && playerSelection == "scissors") {
        return "You lose! Scissors beats rock";
    } else if (computerSelection == "scissors" && playerSelection == "scissors") {
        return "It's a tie";
    }
}

console.log(playRound(playerSelection, computerSelection));

