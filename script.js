const game = () => {
  let playerScore = 0;
  let computerScore = 0;
  let gameRound = 0;

  // Intro screen transition to match screen
  const startGame = () => {
    const playButton = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const matchScreen = document.querySelector(".match");

    playButton.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      matchScreen.classList.add("fadeIn");
    });
  };

  // Match play
  const playMatch = () => {
    const hands = document.querySelectorAll(".hands button");
    const computerChoices = ["rock", "paper", "scissors"];

    hands.forEach((hand) => {
      hand.addEventListener("click", function () {
        //Player hand
        const playerHand = this.textContent;

        //Computer random Hand
        const randomChoice = Math.floor(Math.random() * computerChoices.length);
        const computerHand = computerChoices[randomChoice];
        console.log(computerHand);

        // Call compareHands function
        compareHands(playerHand, computerHand);
      });
    });
  };

  // Compare Hands to see who wins the round
  const compareHands = (playerHand, computerHand) => {
    const resultText = document.querySelector(".result h3");

    // Comparing who wins the round
    if (computerHand === playerHand) {
      gameRound++;
      resultText.textContent = "It's a tie";
      updateScore();
      return;
    } else if (
      (computerHand === "rock" && playerHand === "paper") ||
      (computerHand === "paper" && playerHand === "scissors") ||
      (computerHand === "scissors" && playerHand === "rock")
    ) {
      playerScore++;
      gameRound++;
      resultText.textContent = "You won the round";
      updateScore();
      return;
    } else if (
      (computerHand === "paper" && playerHand === "rock") ||
      (computerHand === "scissors" && playerHand === "paper") ||
      (computerHand === "rock" && playerHand === "scissors")
    ) {
      computerScore++;
      gameRound++;
      resultText.textContent = "You lose the round";
      updateScore();
      return;
    }
  };

  // Update the score
  const updateScore = () => {
    const pScore = document.querySelector(".player-score p");
    const cScore = document.querySelector(".computer-score p");

    pScore.textContent = playerScore;
    cScore.textContent = computerScore;
  };

  // Calling inner functions
  startGame();
  playMatch();
  updateScore();
};

// Calling main function
game();
