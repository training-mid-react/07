import { GameState } from "../core/interfaces/gameState";

export const verifyWinUser = (state: GameState) => {

    const { tablero, isPlayerOneTurn, tableroRow, tableroColumn } = state
    const player = isPlayerOneTurn ? 1 : 2;

    return (
        checkHorizontalWin(tablero, tableroRow, tableroColumn, player) ||
        checkVerticalWin(tablero, tableroRow, tableroColumn, player) ||
        checkDiagonal(tablero, tableroRow, tableroColumn, player)
    )


}


export const verifyDrawUser = (tablero: Array<Array<number>>) => {

    return (
        checkDraw(tablero)
    )
}


function checkVerticalWin(board: Array<Array<number>>, rowBoard: number, columnBoard: number, player: number) {
    let count = 1;
    let row = rowBoard + 1;

    while (row < board.length && board[row][columnBoard] === player) {
        count++;
        row++;
    }

    // console.log({ count })
    return count >= 4;

}


function checkHorizontalWin(board: Array<Array<number>>, rowBoard: number, columnBoard: number, player: number) {

    let count = 1;
    // Verificar hacia la izquierda
    let column = columnBoard - 1;
    while (column >= 0 && board[rowBoard][column] === player) {
        count++;
        column--;
    }

    // Verificar hacia la derecha
    column = columnBoard + 1;
    while (column < board[0].length && board[rowBoard][column] === player) {
        count++;
        column++;
    }


    return count >= 4;

}

function checkDiagonal(board: Array<Array<number>>, rowBoard: number, columnBoard: number, player: number) {
    let count = 1;

    // Diagonal descendente hacia la derecha (\)
    let row = rowBoard + 1;
    let column = columnBoard + 1;
    while (row < board.length && column < board[0].length && board[row][column] === player) {
        count++;
        row++;
        column++;
    }

    if (count >= 4) return true;

    // Reiniciar conteo para la otra diagonal
    count = 1;

    // Diagonal descendente hacia la izquierda (/)
    row = rowBoard + 1;
    column = columnBoard - 1;
    while (row < board.length && column >= 0 && board[row][column] === player) {
        count++;
        row++;
        column--;
    }

    return count >= 4;
}

function checkDraw(tablero: Array<Array<number>>) {

    for (let row = 0; row < tablero.length; row++) {
        for (let col = 0; col < tablero[row].length; col++) {
            if (tablero[row][col] === null) {
                return false;
            }
        }
    }


    return true;
}