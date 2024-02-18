//prompt user for choice
function getPlayerChoice() {
    let playerChoice = prompt('Rock, paper, or scissors?', ).toLowerCase()
    while (playerChoice != 'rock' && playerChoice != 'scissors' && playerChoice != 'paper') {
        playerChoice = prompt('Invalid: Enter rock, paper, or scissors')
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