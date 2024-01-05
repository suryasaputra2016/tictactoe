// ask user to choose mode and start the game
// 1. player vs player
// 2. player vs computer
// 3. computer vs player


// start the game say it's player vs player
// set the player to 'X"
// while there's no winner and the board is still not full
    // draw the board and ask user to choose
    // update the board according to the user choice
    // check the winning condition
        // if the winning condition met anounce the winner and ask the user to choose mode
    // check if the board is full
        // if the board is full announce that the game is tied and ask the user to choose mode
    // switch player


let game = function() {

    let gameContinue = true;
    let player = 'X';
    let board = [
        ['_', '_', '_'],
        ['_', '_', '_'],
        ['_', '_', '_']
    ];

    function drawBoard() {
        let boardString = ''
        for(let row = 0; row < 3; row++) {
            for(let col = 0; col < 3; col++) {
                boardString += ` ${board[row][col]} `
            }
            boardString += '\n'
        }
        console.log(boardString);
    }

    function askUserChoice(player) {
        const row = prompt('enter row');
        const column = prompt('enter column');
        board[row][column] = player;
    }

    function isWinning(player) {
        for(let i = 0; i < 3; i++) {
            if (checkRow(player, i)) {return true;}
            if(checkColumn(player, i)) { return true;}
        }
        if (checkDiagonals(player)) {return true;}
        return false;
    }

    function checkRow(player, row) {
        if(board[row][0] === player && board[row][1] === player && board[row][2] === player) {
            return true;
        } else {
            return false;
        }
    }

    function checkColumn(player, col) {
        if(board[0][col] === player && board[1][col] === player && board[2][col] === player) {
            return true;
        } else {
            return false;
        }
    }

    function checkDiagonals(player) {
        if(board[0][0] === player && board[1][1] === player && board[2][2] === player) {
            return true;
        } else if(board[0][2] === player && board[1][1] === player && board[2][0] === player) {
            return true;
        } else {
            return false;
        }
    }

    function checkFullBoard() {
        for(let row = 0; row < 3; row++) {
            if(board[row].includes('_')) { return false; }
        }
        return true;
    }

    drawBoard();
    while(gameContinue) {
        askUserChoice(player);
        drawBoard();
        if(isWinning(player)) {
            console.log(`We have a winner. And the winner is ${player}.`)
            gameContinue = false;
        } else if(checkFullBoard()) {
            console.log("It's a tie.")
            gameContinue = false;
            player = '_';
        } else {
            player = (player==='X') ? 'O' : 'X';
        }
    }

    return(player);
}
