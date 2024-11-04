import { useContext } from "react"
import { AppContext } from "../state/AppContext"
import { changeTurn, handleClick, handleDrop, resetTablero, verifyWin } from '../state/tablero/actions';

export const useGetTablero = () => {

    const { state, dispatch } = useContext(AppContext)


    const handleClickButton = (column: number) => {

        let inputColumn = column

        if (inputColumn < 0 || inputColumn == 0) {
            inputColumn = 0;
        } else if (inputColumn >= 7) {
            inputColumn = 6;
        } else {
            // Si está entre 0 y 7, restar 1
            inputColumn -= 1;
        }

        // console.log({ state })

        dispatch(handleDrop(inputColumn))
        dispatch(handleClick(state))
        dispatch(verifyWin(state))

        if (!state.isThereWinner) {
            dispatch(changeTurn(state))
        }
    }


    const handleResetGame = () => {
        dispatch(resetTablero())
    }
    // const checkWin = () => {

    //     const player = state.isPlayerOneTurn ? 1 : 2;
    //     const rowBoard = state.tableroRow
    //     const columnBoard = state.tableroColumn

    //     console.log({ player, rowBoard, columnBoard })

    //     return (
    //         checkHorizontalWin(state.tablero, rowBoard, columnBoard, player) ||
    //         checkVerticalWin(state.tablero, rowBoard, columnBoard, player)
    //     )


    // }



    // function checkHorizontalWin(board: Array<Array<number>>, rowBoard: number, columnBoard: number, player: number) {

    //     let count = 1;
    //     // Verificar hacia la izquierda
    //     let column = columnBoard - 1;
    //     while (column >= 0 && board[rowBoard][column] === player) {
    //         count++;
    //         column--;
    //     }

    //     // Verificar hacia la derecha
    //     column = columnBoard + 1;
    //     while (column < board[0].length && board[rowBoard][column] === player) {
    //         count++;
    //         column++;
    //     }


    //     return count >= 4;

    // }


    // function checkVerticalWin(board: Array<Array<number>>, rowBoard: number, columnBoard: number, player: number) {
    //     let count = 1; // Iniciamos en 1 para contar la ficha actual

    //     // Verificar hacia abajo
    //     let r = rowBoard + 1;
    //     while (r < board.length && board[r][columnBoard] === player) {
    //         count++;
    //         r++;
    //     }


    //     console.log({ count })
    //     return count >= 4;

    // }

    return {
        currentPlayer: state.isPlayerOneTurn ? 1 : 2,
        isAWinner: state.isThereWinner,
        winnerPlayer: state.winnerPlayer,
        handleClickButton,
        handleResetGame
    }

}