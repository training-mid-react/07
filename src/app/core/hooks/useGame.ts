import { useContext } from "react";
import { CELL } from "../interfaces/game.interface";
import { changeGrid, changePlayer, resetGame, setDraw, setWinner } from "../state/game/actions";
import { GameContext } from "../state/gameContext";
import { checkIsDraw } from "../utils/checkDraw";
import { isWinner } from "../utils/checkWin";
import { findEmptyRow } from "../utils/findEmptyRow";
import { resetPlayers } from "../state/players/actions";


export const useGame = () => {
    const { state, dispatch } = useContext(GameContext);

    const { grid, playerActive, player1, player2, winner, isDraw } = state;


    const checkWin = (row: number, col: number, newGrid: CELL[][]) => {
        if (isWinner(row, col, playerActive, grid)) {
            dispatch(setWinner(playerActive));
        } else if (checkIsDraw(newGrid)) {
            dispatch(setDraw());
        } else {
            dispatch(changePlayer(playerActive === player1 ? player2 : player1));
        }
    }

    const handleClickBoard = (col: number) => {
        if (winner) return;
        const row = findEmptyRow(col, grid);
        if (row === -1) return;

        const newBoard = grid.map(row => [...row]);

        newBoard[row][col] = playerActive;

        dispatch(changeGrid(newBoard));
        checkWin(row, col, newBoard);

    };

    const playAgain = () => {
        dispatch(resetGame());
        dispatch(resetPlayers());
    }

    return {
        grid,
        playerActive,
        winner,
        isDraw,
        player1: state.player1,
        player2: state.player2,
        handleClickBoard,
        playAgain
    };
}