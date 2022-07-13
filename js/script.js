function game() {
    let playerScore = 0;
    let computerScore = 0;

    for(let round = 1; round <= 5; round++) {
        let scoreChange = 0;
        
        do {
            scoreChange = playOneRound(round, playerSelection, computerSelection);
        } while (scoreChange === 0); // Replay rounds with a tie!
        
        if(scoreChange > 0) { playerScore++; }   // Positive => Player won the round
        if(scoreChange < 0) { computerScore++; } // Negative => Computer won the round
    }
    
    if(playerScore > computerScore) { console.log(`You won the game! The score was ${playerScore}|${computerScore}.`); } // Win message
                              else { console.log(`You lost the game! The score was ${playerScore}|${computerScore}.`); } // Lose message
}

function playOneRound(round) {
    // Computer and player selections
    let computerSelection = convertSelectionIndexToName(randomizeComputerSelection());
    let playerSelection;
    do {
        playerSelection = prompt('Rock, paper or scissors? ', '').toLowerCase();
    } while(!(playerSelection === 'rock' || 
              playerSelection === 'paper' || 
              playerSelection === 'scissors')); // Only allows valid inputs
    
    // Logs the result and returns points
    switch (compareSelections(playerSelection, computerSelection)) {
        case 0:
            console.log(`Round ${round}: Tie! Both players chose ${playerSelection}. Play the round again!`);
            return 0; // 0 points if it is a tie
        case 1:
            console.log(`Round ${round}: You win! ${capitalizeFirstLetterOfString(playerSelection)} beats ${computerSelection}.`);
            return 1; // 1 point if the player wins
        case 2:
            console.log(`Round ${round}: You lose! ${capitalizeFirstLetterOfString(computerSelection)} beats ${playerSelection}.`);
            return -1; // -1 point if the player loses
        default:
            console.log(`Round ${round}: Something went wrong!`);
            return 0;
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

game();