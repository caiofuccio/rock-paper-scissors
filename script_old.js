// Global Variables initialization
const totalRounds = 5;
let computerScore = 0;
let playerScore = 0;
let gameRound = 1;

// Pick a random choice from the rock-paper-scissors array
function computerPlay() {
  let choicesArray = ["rock", "paper", "scissors"];
  let random = Math.floor(Math.random() * choicesArray.length);

  let computerSelection = choicesArray[random];

  return computerSelection;
}

// Function to define the winner of a round
function playRound(computerSelection, playerSelection) {
  if (computerSelection === playerSelection) {
    return `It's a tie! Computer also choose ${computerSelection}!
    Score: ${playerScore} Player vs Computer ${computerScore}`;
    gameRound++;
  } else if (
    (computerSelection === "rock" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "scissors") ||
    (computerSelection === "scissors" && playerSelection === "rock")
  ) {
    playerScore++;
    return `You won! ${playerSelection} beats ${computerSelection}!
    Score: ${playerScore} Player vs Computer ${computerScore}`;
    gameRound++;
  } else if (
    (computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "scissors" && playerSelection === "paper") ||
    (computerSelection === "rock" && playerSelection === "scissors")
  ) {
    computerScore++;
    return `You lose! ${computerSelection} beats ${playerSelection}!
    Score: ${playerScore} Player vs Computer ${computerScore}`;
    gameRound++;
  }
}

// Play the rock-paper-scissors for totalRounds
function game() {
  while (gameRound <= totalRounds) {
    // Gets computer and player selection
    let computerSelection = computerPlay();
    let playerSelection = prompt(
      "Choose rock, paper or scissors: "
    ).toLowerCase();

    console.log(playRound(computerSelection, playerSelection));
    gameRound++;
  }
}

game();
