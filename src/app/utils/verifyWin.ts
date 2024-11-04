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


function checkVerticalWin(board: Array<Array<number>>, rowBoard: number, columnBoard: number, player: number) {
    let count = 1;
    let r = rowBoard + 1;

    while (r < board.length && board[r][columnBoard] === player) {
        count++;
        r++;
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
    let count = 1; // Comenzamos contando la ficha actual

    // Diagonal descendente hacia la derecha (\)
    let r = rowBoard + 1;
    let c = columnBoard + 1;
    while (r < board.length && c < board[0].length && board[r][c] === player) {
        count++;
        r++;
        c++;
    }

    if (count >= 4) return true;

    // Reiniciar conteo para la otra diagonal
    count = 1;

    // Diagonal descendente hacia la izquierda (/)
    r = rowBoard + 1;
    c = columnBoard - 1;
    while (r < board.length && c >= 0 && board[r][c] === player) {
        count++;
        r++;
        c--;
    }

    return count >= 4;
}

