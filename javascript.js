// funktio jolla tietokone valitsee kiven, saksen tai paperin.
const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const random = Math.floor(Math.random() * options.length);
    return options[random];
    }


let playerScore = 0;
const playerScoreText = document.querySelector("#playerScore");

let computerScore = 0;
const computerScoreText = document.querySelector("#computerScore");

const buttonRock = document.querySelector(".rock");
const buttonPaper = document.querySelector(".paper");
const buttonScissors = document.querySelector(".scissors");

buttonRock.addEventListener("click", playRoundRock);
buttonPaper.addEventListener("click", playRoundPaper);
buttonScissors.addEventListener("click", playRoundScissors);

function playRoundRock() {
    let computerChoice = getComputerChoice();
    if (computerChoice == "rock") {
        window.alert(`It's a tie. Computer chose ${computerChoice}`);  
    } else if (computerChoice == "paper") {
        window.alert(`You lose. Computer chose ${computerChoice}`);
        computerScore += 1;
        computerScoreText.textContent = `Tietokoneen score on ${computerScore}`;
    } else if (computerChoice == "scissors") {
        window.alert(`You win. Computer chose ${computerChoice}`)
        playerScore += 1;
        playerScoreText.textContent = `Pelaajan score on ${playerScore}`;
    }
}

function playRoundPaper() {
    let computerChoice = getComputerChoice();
    if (computerChoice == "paper") {
        window.alert(`It's a tie. Computer chose ${computerChoice}`);  
    } else if (computerChoice == "scissors") {
        window.alert(`You lose. Computer chose ${computerChoice}`);
        computerScore += 1;
        computerScoreText.textContent = `Tietokoneen score on ${computerScore}`;
    } else if (computerChoice == "rock") {
        window.alert(`You win. Computer chose ${computerChoice}`)
        playerScore += 1;
        playerScoreText.textContent = `Pelaajan score on ${playerScore}`;
    }
}

function playRoundScissors() {
    let computerChoice = getComputerChoice();
    if (computerChoice == "scissors") {
        window.alert(`It's a tie. Computer chose ${computerChoice}`);  
    } else if (computerChoice == "rock") {
        window.alert(`You lose. Computer chose ${computerChoice}`);
        computerScore += 1;
        computerScoreText.textContent = `Tietokoneen score on ${computerScore}`;
    } else if (computerChoice == "paper") {
        window.alert(`You win. Computer chose ${computerChoice}`)
        playerScore += 1;
        playerScoreText.textContent = `Pelaajan score on ${playerScore}`;
    }
}