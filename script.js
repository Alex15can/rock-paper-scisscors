let playerScore = 0
let computerScore = 0

function playRound(playerSelection, computerSelection) {

    if (playerSelection == 0) {
        playerThrow = "Rock";
    } else if (playerSelection == 1) {
        playerThrow = "Paper";
    } else if (playerSelection == 2) {
        playerThrow = "Scissors";
    }
    if (computerSelection == 0) {
        computerThrow = "Rock";
    } else if (computerSelection == 1) {
        computerThrow = "Paper";
    } else if (computerSelection == 2) {
        computerThrow = "Scissors";
    }


    
    document.getElementById('player-move').innerHTML
    = `${playerThrow}`;
    document.getElementById('computer-move').innerHTML
    = `${computerThrow}`;


    let winner = ""
    if (playerSelection == computerSelection) {
        winner = "tie"
    } else if ((playerSelection + 2)%3 == computerSelection) {
        winner = "player"
    } else if ((playerSelection + 1)%3 == computerSelection) {
        winner = "computer"
    }
    console.log(winner)
    return winner
}

function computerPlay() {
    const compthrow = Math.floor(Math.random() * (3));
    return compthrow
}

function game() {
    const btnRock = document.querySelector('#rock');
    btnRock.addEventListener('click', () => {
        winner = (playRound(0,computerPlay()))
        scoreKeeper(winner)
    });
    const btnPaper = document.querySelector('#paper');
    btnPaper.addEventListener('click', () => {
        winner = (playRound(1,computerPlay()))
        scoreKeeper(winner)
    });
    const btnScissors = document.querySelector('#scissors');
    btnScissors.addEventListener('click', () => {
        winner = (playRound(2,computerPlay()))
        scoreKeeper(winner)
    });
}
function scoreKeeper(winner) {
    if (winner == 'player') {
        playerScore = playerScore + 1
    } else if (winner == 'computer') {
        computerScore = computerScore + 1
    }
    document.getElementById('player-score').innerHTML
    = `${playerScore}`;
    document.getElementById('computer-score').innerHTML
    = `${computerScore}`;

    if (playerScore == 5 || computerScore == 5) {
        if (playerScore == 5) {
            document.getElementById('text-results').innerHTML
            = "Congrats you've beat the robot. Want to play again?";
        }else if (computerScore == 5) {
            document.getElementById('text-results').innerHTML
            = "You have lost to the robot. Want to play again?";
        }
        playerScore = 0
        computerScore = 0
    }
}
game()