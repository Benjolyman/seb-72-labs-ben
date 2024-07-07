
//consts and variables

let board;
let turn;
let winner;
let tie;

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


const squareElements = document.querySelectorAll('.sqr');
const gameState = document.querySelector('#message');


//board updates 
const init = () => {

    turn = 'x';
    winner = false;
    tie = false;
    board = [
        '', '', '',
        '', '', '',
        '', '', ''
    ];
    render();
};


const render = () => {
    updateBoard();
    updateMessage();
};


const updateBoard = () => {
    for (let i = 0; i < board.length; i++) {
        squareElements[i].textContent = board[i];
    }
};

const updateMessage = () => {
    if (winner === false && tie === false) {
        gameState.textContent = `it's currently ${turn}'s turn`
    } else if (winner === false && tie === true) {
        gameState.textContent = `it's a tie`
    } else { gameState.textContent = `congrats ${turn} won` };
};


//logic


const handleClick = (event) => {
    const squareIndex = Array.from(squareElements).indexOf(event.target);
    if (board[squareIndex] === 'x' || board[squareIndex] === 'o' || winner === true) {
        return;
    }
    placePiece(squareIndex);
    checkForWinner();
    checkForTie();
    switchPlayerTurn();
    render();
};

const placePiece = (index) => {
    board[index] = turn;
};

const checkForWinner = () => {
    winningCombos.forEach(combo => {
        const [a, b, c] = combo;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            winner = true;
        }
    });
};

const checkForTie = () => {
    if (winner === true) {
        return;
    };
    tie = board.every(square => square !== '');
};

const switchPlayerTurn = () => {
    if (winner === true) {
        return;
    } else { turn = turn === 'x' ? 'o' : 'x' }
};

//event listeners

window.onload = () => {
    init();
};

squareElements.forEach(sqr => {
    sqr.addEventListener('click', handleClick);
});

const resetBtnElement = document.querySelector('#reset');
resetBtnElement.addEventListener('click', init);
