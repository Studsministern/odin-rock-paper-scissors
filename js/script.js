function playRound(playerSelection, computerSelection) {
    let playerSelectionIndex = selectionIndex(playerSelection);
    console.log('Player index: ' + playerSelectionIndex);

    let computerSelectionIndex = selectionIndex(computerSelection);
    console.log('Computer index: ' + computerSelectionIndex);

    let diff = playerSelectionIndex - computerSelectionIndex;
    console.log('Diff: ' + diff);

    let modulu = diff % 3;
    console.log('Modulu 3: ' + modulu);
    if (modulu < 0) { modulu += 3; }
    
    switch (modulu) {
        case 0:
            console.log(`Tie! Both players chose ${playerSelection}.`);
            return 0;
        case 1:
            console.log(`You win! ${firstLetterCapitalised(playerSelection)} beats ${computerSelection}.`);
            return 1;
        case 2:
            console.log(`You lose! ${firstLetterCapitalised(computerSelection)} beats ${playerSelection}.`);
            return -1;
        default:
            console.log('Something went wrong!');
            return 0;
    }
}

function computerPlay() { // Random choice between rock (1), paper (2) and scissors (3)
    return Math.floor(Math.random() * 3) + 1;
}

function selectionIndex(selection) { // Convert string to a number
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

function selectionName(selection) { // Convert number to a string
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

function firstLetterCapitalised(input) { // Conert string to 
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

// Player Selection (Do-while loop to only allow valid inputs)
let playerSelection;
do {
    playerSelection = prompt('Rock, paper or scissors? ', '').toLowerCase();
} while(!(playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors'));
console.log('Player chose: ' + playerSelection);

// Computer Selection
let computerSelection = selectionName(computerPlay());
console.log('Computer chose: ' + computerSelection);

// Playing a round
console.log(playRound(playerSelection, computerSelection));