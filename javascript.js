const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const random = Math.floor(Math.random() * options.length);
    return options[random];
    }

let playerScore = 0;
let computerScore = 0;

let round = 1;
function playRound() {
    let start = window.prompt("Round " + round + ".\nYour score is "
        + playerScore  +". Computer score is " + computerScore + ".\nWhich option do you pick?");

    let playerChoice = start.toLowerCase();
    let computerChoice = getComputerChoice();
    if ((playerChoice == "rock" && computerChoice == "scissors") ||
    (playerChoice == "paper" && computerChoice == "rock") ||
    (playerChoice == "scissors" && computerChoice == "paper")) {
        playerScore += 1;
        window.alert(`You chose ${playerChoice}, computer chose ${computerChoice}. You win this round.`)
        console.log(`You chose ${playerChoice}, computer chose ${computerChoice}. You win this round.`)
        round += 1;
    } else if ((playerChoice == "rock" && computerChoice == "rock") ||
    (playerChoice == "paper" && computerChoice == "paper")||
    (playerChoice == "scissors" && computerChoice == "scissors")) {
    window.alert(`You chose ${playerChoice}, computer chose ${computerChoice}. It is a tie.`)
    console.log(`You chose ${playerChoice}, computer chose ${computerChoice}. It is a tie.`)
    playRound();
    } else if (!(playerChoice == "rock" || playerChoice == "paper" || playerChoice == "scissors")) {
    window.alert("Choose either rock, paper or scissors");
    playRound();
    }  else {
    computerScore += 1;
    window.alert(`You chose ${playerChoice}, computer chose ${computerChoice}. You lose this round.`)
    console.log(`You chose ${playerChoice}, computer chose ${computerChoice}. You lose this round.`)
    round += 1; }
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
