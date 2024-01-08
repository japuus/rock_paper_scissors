const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const random = Math.floor(Math.random() * options.length);
    return options[random];
    }

let playerScore = 0;
let computerScore = 0;

let round = 1;
function playRound() {
    let playerChoice = window.prompt("Round " + round + ".\nYour score is " + playerScore  +". Computer score is " + computerScore + ".\nWhich option do you pick?");
    let computerChoice = getComputerChoice();
    if (computerChoice == "paper" && playerChoice.toLowerCase() == "rock") {         // You lose with rock
        computerScore += 1;
        window.alert("You chose rock, computer chose rock.\nYou lose! Paper beats rock.");
        console.log("Score after round " + round + ": Player score " + playerScore + ". Computer score " + computerScore + ".");
        round += 1;
    } else if (computerChoice == "rock" && playerChoice.toLowerCase() == "rock") {           // Tie with rock
        window.alert("You chose rock, computer chose rock.\nIt's a tie, play again.");
        playRound();
    } else if (computerChoice == "scissors" && playerChoice.toLowerCase() == "rock") { // You win with rock
        playerScore += 1;
        window.alert("You chose rock, computer chose scissors.\nYou win! Rock beats scissors.");
        console.log("Score after round " + round + ": Player score " + playerScore + ". Computer score " + computerScore + ".");
        round += 1;
    } else if (computerChoice == "paper" && playerChoice.toLowerCase() == "paper") {            // Tie with paper
        window.alert("You chose paper, computer chose paper.\nIt's a tie, play again.");
        playRound();
    } else if (computerChoice == "rock" && playerChoice == "paper") {            // You win with paper
        playerScore += 1;
        window.alert("You chose paper, computer chose rock.\nYou win! Paper beats rock.")
        console.log("Score after round " + round + ": Player score " + playerScore + ". Computer score " + computerScore + ".");
        round += 1;
    } else if (computerChoice == "scissors" && playerChoice == "paper") {            // You lose with paper
        computerScore += 1;
        window.alert("You chose paper, computer chose scissors.\nYou lose! Scissors beats paper.");
        console.log("Score after round " + round + ": Player score " + playerScore + ". Computer score " + computerScore + ".");
        round += 1;
        return "You lose! Scissors beats paper!"
    } else if (computerChoice == "paper" && playerChoice == "scissors") {           // You win with scissors
        playerScore += 1;
        window.alert("You chose scissors, computer chose paper.\nYou win! Scissors beats paper.");
        console.log("Score after round " + round + ": Player score " + playerScore + ". Computer score " + computerScore + ".");
        round += 1;
    } else if (computerChoice == "rock" && playerChoice == "scissors") {            // You lose with scissors
        computerScore += 1;
        window.alert("You chose scissors, computer chose rock.\nYou lose! Rock beats scissors.");
        console.log("Score after round " + round + ": Player score " + playerScore + ". Computer score " + computerScore + ".");
        round += 1;
    } else if (computerChoice == "scissors" && playerChoice == "scissors") {        // Tie with scissors
        window.alert("You chose scissors, computer chose scissors.\nIt's a tie, play again.");
        playRound();
    } else if (!(playerChoice == "rock" || playerChoice == "paper" || playerChoice == "scissors")) {
        window.alert("Choose either rock, paper or scissors");
        return playRound();
    }
}

function game() {
    console.log("This is a game of rock, paper, scissors.");
    window.alert("This is a game of rock, paper, scissors.");
    for (let i = 0; i < 5; i++) {
        playRound();
    }
    if (playerScore > computerScore) {
        window.alert("You won the game! Your score is " + playerScore + ". Computer score is " + computerScore + ".");
        console.log("You won the game! Your score is " + playerScore + ". Computer score is " + computerScore + ".");
    } else {
        window.alert("You lost the game. Your score is " + playerScore + ". Computer score is " + computerScore + ".")
        console.log("You lost the game. Your score is " + playerScore + ". Computer score is " + computerScore + ".");
    }
}

game();
