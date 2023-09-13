let computerChoice;

// Generates a selection for the computer from one of three options.

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

// Function to play a round of the game. Asks for input from player, and then compares that to generated computer selection.

function playRound(userSelection, computerSelection) {
  let userChoice = prompt(
    "Type 'rock,' 'paper,' or 'scissors' to make your selection",
    "rock"
  );
  getComputerChoice();
  switch (true) {
    case userChoice.toLowerCase() === "rock" && computerChoice === "rock":
      console.log(
        `It's a tie! You selected ${userChoice} and the computer selected ${computerChoice}. The score is ${userScore} to ${computerScore}.`
      );
      break;
    case userChoice.toLowerCase() === "rock" && computerChoice === "paper":
      computerScore++;
      console.log(
        `You lost! You selected ${userChoice} and the computer selected ${computerChoice}. The score is ${userScore} to ${computerScore}.`
      );
      break;
    case userChoice.toLowerCase() === "rock" && computerChoice === "scissors":
      userScore++;
      console.log(
        `You won! You selected ${userChoice} and the computer selected ${computerChoice}. The score is ${userScore} to ${computerScore}.`
      );
      break;
  }

  switch (true) {
    case userChoice.toLowerCase() === "paper" && computerChoice === "rock":
      userScore++;
      console.log(
        `You won! You selected ${userChoice} and the computer selected ${computerChoice}. The score is ${userScore} to ${computerScore}.`
      );
      break;
    case userChoice.toLowerCase() === "paper" && computerChoice === "paper":
      console.log(
        `It's a tie! You selected ${userChoice} and the computer selected ${computerChoice}. The score is ${userScore} to ${computerScore}.`
      );
      break;
    case userChoice.toLowerCase() === "paper" && computerChoice === "scissors":
      computerScore++;
      console.log(
        `You lost! You selected ${userChoice} and the computer selected ${computerChoice}. The score is ${userScore} to ${computerScore}.`
      );
      break;
  }

  switch (true) {
    case userChoice.toLowerCase() === "scissors" && computerChoice === "rock":
      computerScore++;
      console.log(
        `You lost! You selected ${userChoice} and the computer selected ${computerChoice}. The score is ${userScore} to ${computerScore}.`
      );
      break;
    case userChoice.toLowerCase() === "scissors" && computerChoice === "paper":
      userScore++;
      console.log(
        `You won! You selected ${userChoice} and the computer selected ${computerChoice}. The score is ${userScore} to ${computerScore}.`
      );
      break;
    case userChoice.toLowerCase() === "scissors" &&
      computerChoice === "scissors":
      console.log(
        `It's a tie! You selected ${userChoice} and the computer selected ${computerChoice}. The score is ${userScore} to ${computerScore}.`
      );
      break;
  }
}

// Sets the score for each of the players.

let userScore = 0;
let computerScore = 0;

// Runs 5 rounds of the game, logging the totals after each round.

function playGame() {
  while (userScore < 5 && computerScore < 5) {
    playRound();
  }
}
playGame();
console.log(`Game over! The final score was ${userScore} to ${computerScore}.`);
