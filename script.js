const game = () => {
  let playerScore = 0;
  let computerScore = 0;
  let gameRound = 1;

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
      resultText.textContent = "It's a tie!";
      updateScore();
      updateRound();
      endGame();
      return;
    } else if (
      (computerHand === "rock" && playerHand === "paper") ||
      (computerHand === "paper" && playerHand === "scissors") ||
      (computerHand === "scissors" && playerHand === "rock")
    ) {
      playerScore++;
      gameRound++;
      resultText.textContent = `Computer chooses ${computerHand}. You won the round!`;
      updateScore();
      updateRound();
      endGame();
      return;
    } else if (
      (computerHand === "paper" && playerHand === "rock") ||
      (computerHand === "scissors" && playerHand === "paper") ||
      (computerHand === "rock" && playerHand === "scissors")
    ) {
      computerScore++;
      gameRound++;
      resultText.textContent = `Computer chooses ${computerHand}. You lose the round!`;
      updateScore();
      updateRound();
      endGame();
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

  // Update the round counter
  const updateRound = () => {
    const roundCounter = document.querySelector(".round p");

    roundCounter.textContent = gameRound;
  };

  // Match Screen transition to Game Over Screen
  const endGame = () => {
    const gameoverScreen = document.querySelector(".gameover");
    const matchScreen = document.querySelector(".match");
    const roundCounter = document.querySelector(".round p");
    const winnerText = document.querySelector(".winner p");

    if (gameRound === 6) {
      roundCounter.textContent = "End";

      matchScreen.classList.remove("fadeIn");
      matchScreen.classList.add("fadeOut");
      matchScreen.style.pointerEvents = "none";

      setTimeout(() => {
        gameoverScreen.classList.add("fadeIn");
      }, 500);

      if (playerScore === computerScore) {
        winnerText.textContent = "It's a draw!";
      } else if (playerScore > computerScore) {
        winnerText.textContent = "You won the game!";
      } else {
        winnerText.textContent = "You lose the game!";
      }

      return;
    } else {
      return;
    }
  };

  // Restart the Game
  const restartGame = () => {
    const restartButton = document.querySelector(".winner button");

    const gameoverScreen = document.querySelector(".gameover");
    const matchScreen = document.querySelector(".match");

    const roundCounter = document.querySelector(".round p");
    const pScore = document.querySelector(".player-score p");
    const cScore = document.querySelector(".computer-score p");
    const resultText = document.querySelector(".result h3");

    restartButton.addEventListener("click", () => {
      gameoverScreen.classList.remove("fadeIn");
      gameoverScreen.classList.add("fadeOut");

      //Resets all variables
      playerScore = 0;
      computerScore = 0;
      gameRound = 1;

      pScore.textContent = playerScore;
      cScore.textContent = computerScore;
      roundCounter.textContent = gameRound;
      resultText.textContent = "Choose a hand";

      setTimeout(() => {
        matchScreen.classList.remove("fadeOut");
        matchScreen.classList.add("fadeIn");
        matchScreen.style.pointerEvents = "all";
      }, 700);
    });
  };

  // Calling inner functions
  startGame();
  playMatch();
  restartGame();
};

// Calling main function
game();
