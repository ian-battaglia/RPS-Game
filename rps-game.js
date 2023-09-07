let userScore = 0;
let computerScore = 0;

let userChoice = prompt(
  "Type 'rock,' 'paper,' or 'scissors' to make your selection",
  "rock"
);

function getComputerChoice(choice) {
  let computerChoice;
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
  if (getComputerChoice() == "rock" && userChoice.toLowerCase() == "rock") {
    console.log("Rock and Rock! It's a tie!");
  } else {
    console.log("Let's try that again.");
  }
}

console.log(userChoice);
console.log(getComputerChoice());
playRound();

// let getComputerChoice = "rock";
// let userChoice = "Rock";

// if (getComputerChoice === "rock" && userChoice.toLowerCase() === "rock") {
//   console.log("Rock and Rock! It's a tie!");
// } else {
//   console.log("Let's try that again.");
// }
