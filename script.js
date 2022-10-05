console.log("Hello World");

game();
function game() {
  for (let i = 0; i < 5; i++) {
    alert(playRound(getComputerChoice(), getUserChoice()));
  }
}
function getUserChoice() {
  let selection;

  while (true) {
    if (!selection) {
      selection = prompt(
        "Hello in game Rock, Paper, Scissors! Please write your weapon: Rock,Paper or Scissors?",
        ""
      );
    } else {
      selection = selection.toLowerCase();
      if (
        selection === "rock" ||
        selection === "paper" ||
        selection === "scissors"
      ) {
        return selection;
      } else {
        selection = prompt(
          "Invalid Input, Please write paper,rock or scissors",
          ""
        );
      }
    }
  }
}

function getComputerChoice() {
  const number = Math.floor(Math.random() * 3);
  switch (number) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}
const computerSelection = getComputerChoice();
const playerSelection = getUserChoice();

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "The game is a tie!";
  } else {
    if (playerSelection === "rock" && computerSelection === "paper") {
      return "Computer wins!!!";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
      return "You won!!!!!";
    } else if (
      playerSelection === "paper" &&
      computerSelection === "scissors"
    ) {
      return "Computer wins!!!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
      return "You won!!!!!";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
      return "Computer wins!!!";
    } else if (
      playerSelection === "scissors" &&
      computerSelection === "paper"
    ) {
      return "You won!!!!!";
    }
  }
}
