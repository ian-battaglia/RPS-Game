let userScore = 0;
let computerScore = 0;

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

let userChoice = prompt(
  "Type 'rock,' 'paper,' or 'scissors' to make your selection", "rock"
);

function playRound(playerSelection, computerSelection) {
    if getComputerChoice() === "rock"
}

console.log(userChoice);
console.log(getComputerChoice());