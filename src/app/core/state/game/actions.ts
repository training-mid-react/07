import { COLS, PLAYER1, ROWS } from "../../constants/constants";
import { CELL } from "../../interfaces/game.interface";
import { IPlayer } from "../../interfaces/player.interface";

export const gameActions = {
    CHANGE_PLAYER: "CHANGE_PLAYER",
    SET_WINNER: "SET_WINNER",
    CHANGE_GRID: "CHANGE_GRID",
    SET_DRAW: "SET_DRAW",
    RESET_GAME: "RESET_GAME"
}

export const changePlayer = (player: IPlayer) => ({
    type: gameActions.CHANGE_PLAYER,
    payload: player,
});

export const setWinner = (player: IPlayer) => ({
    type: gameActions.SET_WINNER,
    payload: player,
});

export const changeGrid = (grid: CELL[][]) => ({
    type: gameActions.CHANGE_GRID,
    payload: grid,
})

export const setDraw = () => ({
    type: gameActions.SET_DRAW,
    payload: true,
})

export const resetGame = () => ({
    type: gameActions.RESET_GAME,
    payload: {
        grid: Array(ROWS).fill(Array(COLS).fill(null)),
        playerActive: PLAYER1,
        winner: null,
        isDraw: false,
    }
})