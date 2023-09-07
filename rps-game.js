let userScore = 0;
let computerScore = 0;

let userChoice = prompt(
  "Type 'rock,' 'paper,' or 'scissors' to make your selection",
  "rock"
);

let computerChoice;

function getComputerChoice(choice) {
  let randomChoice = Math.floor(Math.random() * 3);
  if (randomChoice === 0) {
    computerChoice = "rock";
  } else if (randomChoice === 1) {
    computerChoice = "paper";
  } else if (randomChoice === 2) {
    computerChoice = "scissors";
  }
  return computerChoice;
}

function playRound(userSelection, computerSelection) {
  getComputerChoice();
  if (computerChoice == "rock" && userChoice.toLowerCase() == "rock") {
    console.log(userChoice);
    console.log(computerChoice);
    console.log("Rock and Rock! It's a tie!");
  } else {
    console.log(userChoice);
    console.log(computerChoice);
    console.log("Let's try that again.");
  }
}

playRound();
