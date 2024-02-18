//prompt user for choice
function getPlayerChoice() {
    let playerChoice = prompt('Rock, paper, or scissors?', ).toLowerCase()
    while (playerChoice != 'rock' && playerChoice != 'scissors' && playerChoice != 'paper') {
        playerChoice = prompt('Invalid: Enter rock, paper, or scissors').toLowerCase()
    }
    return playerChoice
}

function getComputerChoice() {
    randomSelection = Math.random()
    let computerChoice
    if (randomSelection <= 0.33) {
        computerChoice = 'rock'
    }
    else if (randomSelection <= 0.66 && randomSelection > 0.33) {
        computerChoice = 'paper'
    }
    else {
        computerChoice = 'scissors'
    }
    return computerChoice
 
}

function playGame() {
    let playerChoice = getPlayerChoice()
    let computerChoice = getComputerChoice()

    if (computerChoice == 'rock') {
        switch (playerChoice) {
            case 'rock': 
                document.getElementById('result').textContent =`Tie! You chose ${playerChoice} and your opponent chose ${computerChoice}`
                break;
            case 'paper':
                document.getElementById('result').textContent = `You win! You chose ${playerChoice} and your opponent chose ${computerChoice}`
                break;
            case 'scissors':
                document.getElementById('result').textContent =`You lose! You chose ${playerChoice} and your opponent chose ${computerChoice}`
                break;
        }
    }

    if (computerChoice == 'scissors') {
        switch (playerChoice) {
            case 'rock': 
            document.getElementById('result').textContent = `You win! You chose ${playerChoice} and your opponent chose ${computerChoice}`
                break;
            case 'paper':
                document.getElementById('result').textContent =`You lose! You chose ${playerChoice} and your opponent chose ${computerChoice}`
                break;
            case 'scissors':
                document.getElementById('result').textContent =`Tie! You chose ${playerChoice} and your opponent chose ${computerChoice}`
                break;
        }
    }

    if (computerChoice == 'paper') {
        switch (playerChoice) {
            case 'rock': 
            document.getElementById('result').textContent =`You lose! You chose ${playerChoice} and your opponent chose ${computerChoice}`
                break;
            case 'paper':
                document.getElementById('result').textContent =`Tie! You chose ${playerChoice} and your opponent chose ${computerChoice}`
                break;
            case 'scissors':
                document.getElementById('result').textContent =`You win! You chose ${playerChoice} and your opponent chose ${computerChoice}`
                break;
        }
    }
    document.getElementById('playButton').textContent = 'Play Again';
}