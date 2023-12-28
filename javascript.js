const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const random = Math.floor(Math.random() * options.length);
    return options[random];
    }

let playerScore = 0;
let computerScore = 0;


function playRound2() {
    let sign = window.prompt("Which option do you pick?")
    let computerSelection = getComputerChoice();
    console.log("You chose" + " " + sign);
    console.log("Computer chose" + " " + computerSelection);
    if (computerSelection == "paper" && sign.toLowerCase() == "rock") {
        computerScore += 1;
        window.alert("You lose! Paper beats rock");
        return "You lose! Paper beats rock";
    } else if (computerSelection == "rock" && sign.toLowerCase() == "rock") {
        window.alert("It's a tie, play again");
        console.log("It's a tie, play again.")
        playRound2();
    } else if (computerSelection == "scissors" && sign.toLowerCase() == "rock") {
        playerScore += 1;
        window.alert("You win! Rock beats scissors");
        return "You won! Rock beats scissors!";
    } else if (computerSelection == "paper" && sign == "paper") {
        return "It's a tie, play again!";
    } else if (computerSelection == "rock" && sign == "paper") {
        return "You won! Paper beats rock";
    } else if (computerSelection == "scissors" && sign == "paper") {
        return "You lose! Scissors beats paper!"
    } else if (computerSelection == "paper" && sign == "scissors") {
        return "You win! Scissors beats paper";
    } else if (computerSelection == "rock" && sign == "scissors") {
        return "You lose! Scissors beats rock";
    } else if (computerSelection == "scissors" && sign == "scissors") {
        return "It's a tie, play again!";
    } else if ((computerSelection == "rock" || computerSelection == "paper" || computerSelection == "scissors") && !(sign == "rock" || sign == "paper" || sign == "scissors")) {
        window.alert("Choose either rock, paper or scissors");
        return playRound2();
    }
}

function game() {
    //let currentScore = `Current score: Player score ${playerScore}. Computer score ${computerScore}.`;
    let currentScore = "Player score is " + playerScore + ". Computer score is " + computerScore;
    window.alert("Round 1. " + currentScore);
    console.log("Round 1:");
    console.log(playRound2());
    console.log(playerScore);
    window.alert("Round 2. Player score is " + playerScore + ". Computer score is " + computerScore);
    console.log("Round 2:")
    console.log(playRound2());
    console.log(playerScore);
    window.alert("Round 3. Player score is " + playerScore + ". Computer score is " + computerScore);
    console.log("Round 3:")
    console.log(playRound2());
    console.log(playerScore);
    window.alert("Round 4. Player score is " + playerScore + ". Computer score is " + computerScore);
    console.log("Round 4:")
    console.log(playRound2());
    console.log(playerScore);
    window.alert("Round 5. " + currentScore);
    console.log("Round 5:")
    console.log(playRound2());
    console.log(playerScore);
    if (playerScore > computerScore) {
        window.alert("You won the game! Your score is " + playerScore + ". Computer's score is " + computerScore + ".");
        console.log("You won the game. Your score is " + playerScore + ". Computer's score is " + computerScore + ".");
    } else {
        window.alert("You lost the game. Your score is " + playerScore + ". Computer's score is " + computerScore + ".")
        console.log("You lost the game. Your score is " + playerScore + ". Computer's score is " + computerScore + ".");
    }
}

game();
