let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return "rock";
  } else if (randomValue < 0.67) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    return `You win! ${
      humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)
    } beats ${computerChoice}.`;
  } else {
    computerScore++;
    return `You lose! ${
      computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
    } beats ${humanChoice}.`;
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    let humanChoice;
    do {
      humanChoice = prompt(
        "Enter your choice: rock, paper, or scissors"
      ).toLowerCase();
    } while (!["rock", "paper", "scissors"].includes(humanChoice));

    const computerChoice = getComputerChoice();
    console.log(playRound(humanChoice, computerChoice));
  }
  if (humanScore > computerScore) {
    console.log("You win the game!");
  } else if (humanScore < computerScore) {
    console.log("You lose the game!");
  } else {
    console.log("It's a tie!");
  }
}

playGame();
console.log(`Human score: ${humanScore}, Computer score: ${computerScore}`);
