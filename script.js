let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;
// Scores and round number that start at the beginning of the game.

const generateTarget = () => {
 let target = Math.floor(Math.random() * 10);
 return target;
}
// Generates random target number.

const compareGuesses = (user, computer, target) => {
    const computerGuess = Math.abs(target - computer);
    const userGuess = Math.abs(target - user);
    if (user < 0 || user > 9) {
      return alert('Please choose number from 0 to 9')
    } else if (computerGuess > userGuess) {
      return true
    } else if (computerGuess < userGuess) {
      return false
    } else if (computer === target && userGuess !== target) {
      return false;
    } else {
      return true;
    }
  }

// Determines which player wins and which guess is closest to the target number.

let updateScore = (winner) => {
  if (winner === 'human') {
    return humanScore += 1
  } else (winner === 'computer'); {
    return computerScore += 1;
  }
}
// Updates score depending on the winner

let advanceRound = () => currentRoundNumber += 1
// Updates number after each round.



