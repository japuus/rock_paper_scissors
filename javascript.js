const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const random = Math.floor(Math.random() * options.length);
    return options[random];
    }

function playRound2() {
    let sign = window.prompt("Which option do you pick?")
    let computerSelection = getComputerChoice();
    console.log("You chose"+ " " + sign);
    console.log("Computer chose" + " " + computerSelection);
    if (computerSelection == "paper" && sign == "rock") {
        window.alert("You lose! Paper beats rock");
        return "You lose! Paper beats rock";
    } else if (computerSelection == "rock" && sign == "rock") {
        window.alert("It's a tie, play again");
        console.log("It's a tie, play again.")
        playRound2();
    } else if (computerSelection == "scissors" && sign == "rock") {
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
        return "It's a tie, play again!"
    }
}

function game() {
    window.alert("Round 1");
    console.log("Round 1:")
    console.log(playRound2());
    window.alert("Round 2");
    console.log("Round 2:")
    console.log(playRound2());
    window.alert("Round 3");
    console.log("Round 3:")
    console.log(playRound2());
    window.alert("Round 4");
    console.log("Round 4:")
    console.log(playRound2());
    window.alert("Round 5");
    console.log("Round 5:")
    console.log(playRound2());
}

game();
