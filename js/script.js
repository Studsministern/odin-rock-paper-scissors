function computerPlay() {
    switch(Math.floor(Math.random() * 3)) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            return "Something went wrong!";
    }
}

// Player Selection (Do-while loop to only allow valid inputs)
let playerSelection;
do {
    playerSelection = prompt("Rock, paper or scissors? ", "").toLowerCase();
} while(!(playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors"));
console.log(playerSelection);

// Computer Selection
let computerSelection = computerPlay();
console.log(computerPlay());