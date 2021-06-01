const statusDisplay = document.querySelector('.game--status');

let gameActive = true;

//current player to start with
let currentPlayer = "X";

//starts game with empty boxes, be able to be filled later
let gameState = ["", "", "", "", "", "", "", "", ""];

//messages to display, winner, tie, turns.
const winnerPopUp = () => `Player ${currentPlayer} is the winner` + "<br>" + "<img src=winner.gif>";
const tiePopUp = () => `Game has tied`+"<br>" + "<img src = https://media.tenor.com/images/c51d80c0a35399d72c37058bce88d02c/tenor.gif>";
const currentPlayerTurn = () => `Player ${currentPlayer}'s turn`;

statusDisplay.innerHTML = currentPlayerTurn();

//If these condition sets are met player wins
const winningConditions = [
    [0, 1, 2],//all three rows match player wins  
    [3, 4, 5],//all three rows match player wins 
    [6, 7, 8],//all three rows match player wins 
    [0, 3, 6],//all three columns match player wins
    [1, 4, 7],//all three columns match player wins
    [2, 5, 8],//all three columns match player wins
    [0, 4, 8],//all three cross row/column match player wins
    [2, 4, 6]//all three cross row/column match player wins
];

//first players turn
function boxPlayed(selectedbox, selectedboxIndex) {
    gameState[selectedboxIndex] = currentPlayer;
    selectedbox.innerHTML = currentPlayer;
}

//second players turn
function playerChange() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusDisplay.innerHTML = currentPlayerTurn();
}


//loop less than 7 if any three conditions match for one player, the player wins. if in 7 turns
//no one wins loop continues till end resulting in draw or win
function resultLogic() {
    let gameWon = false;
    let i = 0;
    while (i <= 7) {
        const winCondition = winningConditions[i];
        let x = gameState[winCondition[0]];
        let y = gameState[winCondition[1]];
        let z = gameState[winCondition[2]];
        i++
        if (x === '' || y === '' || z === '') {
            continue;
        }
        if (x === y && y === z) {
            gameWon = true;
            break
        }
    }

    //If one of the player wins game ends and displays message for the winnner
    if (gameWon) {
        statusDisplay.innerHTML = winnerPopUp();
        gameActive = false;
        return;
    }

    //if no one wins the game, game ends and tie message is displayed
    let roundTie = !gameState.includes("");
    if (roundTie) {
        statusDisplay.innerHTML = tiePopUp();
        gameActive = false;
        return;
    }

    playerChange();
}

function boxClick(selectedboxEvent) {
    const selectedbox = selectedboxEvent.target;
    const selectedboxIndex = parseInt(selectedbox.getAttribute('box-index'));

    if (gameState[selectedboxIndex] !== "" || !gameActive) {
        return;
    }

    boxPlayed(selectedbox, selectedboxIndex);
    resultLogic();
}

//restarts the game to initital starting point, all empty boxes ready to play again
function restartGame() {
    gameActive = true;
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    statusDisplay.innerHTML = currentPlayerTurn();
    document.querySelectorAll('.box').forEach(box => box.innerHTML = "");
}

//click options for boxes and restart button
document.querySelectorAll('.box').forEach(box => box.addEventListener('click', boxClick));
document.querySelector('.game--restart').addEventListener('click', restartGame);