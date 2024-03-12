let playerScore = 0;
let ComputerSCore = 0;

function getComputerChoice() {
    let choice = ['rock', 'paper', 'scissor'];
    let randomnum = Math.floor(Math.random() * 3);
    return choice[randomnum];
}

function roundPlay(computerChoice, playerChoice) {

    if (computerChoice === playerChoice) {
        return console.log("Its a tie!");
    }

    if (computerChoice === "rock") {
        if (playerChoice === "paper") {
            playerScore++
            return console.log("You win! paper beats rock")
        }
        else {
            ComputerSCore++
            return console.log("You lose! rock beats scissor")
        }
    }
    else if (computerChoice === "paper") {
        if (playerChoice === "scissor") {
            playerScore++
            return console.log("You win! scissor beats paper")

        }
        else {
            ComputerSCore++
            return console.log("You lose! paper beats rock")

        }
    }
    else if (computerChoice === "scissor") {
        if (playerChoice === "rock") {
            playerScore++
            return console.log("You win! rock beats scissor")

        }
        else {
            ComputerSCore++
            return console.log("You lose! scissor beats paper")
        }
    }

}

function playgame() {
    const computerChoice = getComputerChoice();
    const playerChoice = prompt("Enter player choice");
    playerChoice.toString();
    playerChoice.toLowerCase();
    return roundPlay(computerChoice, playerChoice);
}

for (let i = 0; i < 5; i++) {
    playgame();
}
let gameResult;
if (playerScore > ComputerSCore) {
    gameResult = 'You win!';
}
else if (ComputerSCore > playerScore) {
    gameResult = 'Computer wins!';
}
else {
    gameResult = 'Draw!';
}
console.log(`You:${playerScore} Computer:${ComputerSCore}`)
console.log(gameResult);
