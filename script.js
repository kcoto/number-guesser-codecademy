let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// Function to generate a random number between 0 and 9
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}

// Function to compare the guesses of the human and computer players
const compareGuesses = (humanGuess, computerGuess, target) => {
  const humanDifference = Math.abs(target - humanGuess);
  const computerDifference = Math.abs(target - computerGuess);
  return humanDifference <= computerDifference;
}

// Function to update the score of the winner
const updateScore = winner => {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
}

// Function to update the round number
const advanceRound = () => currentRoundNumber++;

// Test the functions
console.log(generateTarget());