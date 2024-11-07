import { COLS, PLAYER1, ROWS } from "../../constants/constants";
import { CELL, IGameState } from "../../interfaces/game.interface";
import { IPlayer } from "../../interfaces/player.interface";
import { gameActions } from "./actions";

export const gameInitialState: IGameState = {
    grid: Array(ROWS).fill(Array(COLS).fill(null)),
    playerActive: PLAYER1,
    winner: null,
    isDraw: false,
};

export const gameCases = {
    [gameActions.CHANGE_PLAYER]: (state: IGameState, payload: IPlayer) => {
        return {
            ...state,
            playerActive: payload,
        };
    },
    [gameActions.SET_WINNER]: (state: IGameState, payload: IPlayer) => {
        return {
            ...state,
            winner: payload,
        };
    },
    [gameActions.CHANGE_GRID]: (state: IGameState, payload: CELL[][]) => {
        return {
            ...state,
            grid: payload,
        };
    },
    [gameActions.SET_DRAW]: (state: IGameState, payload: boolean) => {
        return {
            ...state,
            isDraw: payload,
        };
    },
    [gameActions.RESET_GAME]: (state: IGameState, payload: IGameState) => {
        return {
            ...payload,
        };
    },
}