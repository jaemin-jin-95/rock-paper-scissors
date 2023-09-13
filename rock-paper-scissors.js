// Randomly return either 'Rock', 'Paper' or 'Scissors'
function getComputerChoice() {
   let randomNumber = Math.floor(Math.random() * 3);
   if (randomNumber === 1) {
      return "rock";
   } else if (randomNumber === 2) {
      return "paper";
   } else {
      return "scissors";
   }
}

function playRound(playerSelection, computerSelection) {
   // let playerWins, computerWins = 0;
   playerSelection = playerSelection.toLowerCase();

   if (playerSelection === "rock" && computerSelection === "paper") {
      // computerWins++;
      return "You lose! Paper beats rock";
   } else if (playerSelection === "rock" && computerSelection === "scissors") {
      // playerWins++;
      return "You win! Rock beats scissors";
   } else if (playerSelection === "rock" && computerSelection === "rock") {
      return "Both tied";
   } else if (playerSelection === "paper" && computerSelection === "rock") {
      // playerWins++;
      return "You win! Paper beats rock";
   } else if (playerSelection === "paper" && computerSelection === "scissors") {
      // computerWins++;
      return "You lose! Scissors beats paper";
   } else if (playerSelection === "paper" && computerSelection === "paper") {
      return "Both tied";
   } else if (playerSelection === "scissors" && computerSelection === "rock") {
      // computerWins++;
      return "You lose! Rock beats scissors";
   } else if (playerSelection === "scissors" && computerSelection === "paper") {
      // playerWins++;
      return "You win! Scissors beats paper";
   } else {
      return "Both tied";
   }
}

// Play a 5 round game that keeps score and reports a winner or loser at the end.
function game() {
   let round1 = prompt("1st Round: Rock, Paper, or Scissors");
   console.log(`Round 1: [${round1}] ` + playRound(round1, getComputerChoice()));
   let round2 = prompt("2nd Round: Rock, Paper, or Scissors");
   console.log(`Round 2: [${round2}] ` + playRound(round2, getComputerChoice()));
   let round3 = prompt("3rd Round: Rock, Paper, or Scissors");
   console.log(`Round 3: [${round3}] ` + playRound(round3, getComputerChoice()));
   let round4 = prompt("4th Round: Rock, Paper, or Scissors");
   console.log(`Round 4: [${round4}] ` + playRound(round4, getComputerChoice()));
   let finalRound = prompt("Final Round: Rock, Paper, or Scissors");
   console.log(`Final Round: [${finalRound}] ` + playRound(finalRound, getComputerChoice()));
}

game();
/*
const playerSelection = "Rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
*/