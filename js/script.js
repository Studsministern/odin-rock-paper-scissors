function playOneRound(playerSelection) {
    if(checkGameOver()) return;
    
    let computerSelection = convertSelectionIndexToName(randomizeComputerSelection()); // Computer selection
    
    // Logs the result and updates points
    switch (compareSelections(playerSelection, computerSelection)) {
        case 0:
            roundText.textContent = 'Tie!'
            outputText.textContent = `Both players chose ${playerSelection}. Play the round again!`;
            break;
        case 1:
            roundText.textContent = 'You won the round!'
            outputText.textContent = `${capitalizeFirstLetterOfString(playerSelection)} beats ${computerSelection}.`;
            updateScore(1); // 1 point if the player wins
            break;
        case 2:
            roundText.textContent = 'You lost the round!'
            outputText.textContent = `${capitalizeFirstLetterOfString(computerSelection)} beats ${playerSelection}.`;
            updateScore(-1); // -1 point if the player loses
            break;
        default:
            console.log(`Something went wrong!`);
            return;
    }
}

function compareSelections(playerSelection, computerSelection) {
    let modulo = (convertSelectionNameToIndex(playerSelection) - convertSelectionNameToIndex(computerSelection)) % 3;
    if (modulo < 0) { modulo += 3; } // Positive values only requires 3 cases (0, 1, 2) instead of 5 (-2, -1, 0, 1, 2)
    return modulo;
}

function randomizeComputerSelection() { // Random choice between rock (1), paper (2) and scissors (3)
    return Math.floor(Math.random() * 3) + 1;
}

function updateScore(scoreChange) {
    if(scoreChange === 0) return;
    
    if(scoreChange > 0) { playerScore++; }   // Positive => Player won the round
    if(scoreChange < 0) { computerScore++; } // Negative => Computer won the round

    scoreText.textContent = `${playerScore} | ${computerScore}`;

    if(checkGameOver()) { // Someone has won!
        if(playerScore > computerScore) { roundText.textContent = 'You won the game!'; } // Win message
                                   else { roundText.textContent = 'You lost the game!'; } // Lose message
        
        toggleButtonsHidden();
    }
}

function checkGameOver() {
    return playerScore + computerScore >= 5;
}

function restartGame() {
    playerScore = 0;
    computerScore = 0;
    scoreText.textContent = '0 | 0';
    roundText.textContent = 'Best of 5 rounds! Who will win?';
    outputText.textContent = '';
    toggleButtonsHidden();
}

function toggleButtonsHidden() {
    buttons.forEach((button) => {
        button.hidden = button.hidden ? false : true;
    });
}

function convertSelectionNameToIndex(selection) {
    switch(selection) {
        case 'rock':
            return 1;
        case 'paper':
            return 2;
        case 'scissors':
            return 3;
        default:
            console.log('Something went wrong!');
            return -1;
    }
}

function convertSelectionIndexToName(selection) {
    switch(selection) {
        case 1:
            return 'rock';
        case 2:
            return 'paper';
        case 3:
            return 'scissors';
        default:
            console.log('Something went wrong!');
            return -1;
    }
}

function capitalizeFirstLetterOfString(input) {
    if(typeof input === 'string') {
        if(input.length > 1) {
            firstLetter = input.charAt(0).toUpperCase();
            restOfWord = input.substring(1).toLowerCase();
            return firstLetter + restOfWord;
        }
        return input.toUpperCase();
    }
    return;
}

let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('.buttons > *');
const scoreText = document.querySelector('.score-text');
const roundText = document.querySelector('.round-text');
const outputText = document.querySelector('.output-text');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if(button.id === 'restart') {
            restartGame();
            return;
        }
        
        playOneRound(button.id);
    });
});