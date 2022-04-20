function playRound(playerSelection, computerSelection) {
    
    let winner = ""
    if (playerSelection == computerSelection) {
        winner = "tie"
    } else if ((playerSelection + 2)%3 == computerSelection) {
        winner = "player"
    } else if ((playerSelection + 1)%3 == computerSelection) {
        winner = "computer"
    }
    return winner
}

function computerPlay() {
    const compthrow = Math.floor(Math.random() * (3));
    return compthrow
}

function game() {
    
    for (let i = 0; i < 5; i++) {
        let playerinput = prompt("Please enter rock, paper, or scissors")
        let playerSelection = playerinput.toLowerCase();
        
        
        let playerValue = 3
        if (playerSelection == "rock") {
            playerValue = 0;
        } else if (playerSelection == "paper") {
            playerValue = 1;
        } else if (playerSelection == "scissors") {
            playerValue = 2;
        }
        
        const computerValue = computerPlay();
        const winner = playRound(playerValue, computerValue)
        
        if (computerValue == 0) {
            computerSelection = "rock";
        } else if (computerValue == 1) {
            computerSelection = "paper";
        } else if (computerValue == 2) {
            computerSelection = "scissors";
        }
        
        if (winner == "tie") {
            console.log(`You Tied! You both played ${playerSelection} `)
        } else if (winner == "player") {
            console.log(`You Won! ${playerSelection} beats ${computerSelection}` )
        } else if (winner == "computer") {
            console.log(`You Lost! ${computerSelection} beats ${playerSelection}`)
        }
    }
}
game()