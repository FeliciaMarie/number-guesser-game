let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;
// Scores and round number that start at the beginning of the game.

const generateTarget = () => {
 let target = Math.floor(Math.random() * 10);
 return target;
}
// Generates random target number.

let compareGuesses = (user, computer, target) => {
  if (Math.abs(target - user) < Math.abs(target - computer)) {
    return true
  } else if (Math.abs(target - user) > Math.abs(target - computer)) {
    return false
  } else if (computer === target && user !== target) {
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



