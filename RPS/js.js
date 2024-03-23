let computerScore = 0;
let playerScore = 0;

function getComputerChoice() {
  let choices = ['rock', 'paper', 'scissors'];
  let randomNum = Math.floor(Math.random() * 3);
  return choices[randomNum];
}


let playerChoice;

const rock = document.querySelector("#rock");
rock.addEventListener("click", () => { playerChoice = "rock"; play(); });

const paper = document.querySelector("#paper");
paper.addEventListener("click", () => { playerChoice = "paper"; play()});

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => { playerChoice = "scissors"; play()});

function roundPlay(playerChoice, computerChoice) {
  if (playerChoice === "rock" && computerChoice === "paper") {
    computerScore++;
    return "You lose! Paper beats rock";
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    playerScore++;
    return "You win! Rock beats scissors";
  } else if (playerChoice === "paper" && computerChoice === "scissors") {
    computerScore++;
    return "You lose! Scissors beats paper";
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    playerScore++;
    return "You win! Paper beats rock";
  } else if (playerChoice === "scissors" && computerChoice === "rock") {
    computerScore++;
    return "You lose! Rock beats scissors";
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    playerScore++;
    return "You win! Scissors beats paper";
  } else {
    return "It's a tie!";
  }
}

function play() {
  const computerChoice = getComputerChoice();
  document.getElementById("display").innerText = computerChoice;
  const result = roundPlay(playerChoice, computerChoice); 
  document.getElementById("result").innerText = result; 
  updateScore();
  if(playerScore == 5 || computerScore == 5){
    if (playerScore == 5) {
      document.getElementById("result").innerText = "Congratulations! You win the game!";
    } else {
      document.getElementById("result").innerText = "Computer wins the game! Better luck next time.";
    }
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;

  }
  return result;
}

function updateScore() {
  document.getElementById("playerScore").innerText = playerScore;
  document.getElementById("computerScore").innerText = computerScore;
}


