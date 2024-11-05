import { IGameState } from "../../interfaces/state";
import { gameInitialState } from "../reducers";
import { CHANGE_PLAYER, DROP_PIECE, RESET_GAME, SET_DRAW, SET_WINNER } from "./actions";

const dropPiece = (board: number[][], column: number, player: number): number[][] => {
    const newBoard = board.map(row => [...row]); 
    for (let row = 5; row >= 0; row--) { 
        if (newBoard[row][column] === 0) { 
            newBoard[row][column] = player; 
            return newBoard;
        }
    }
    console.warn(`Columna ${column} está llena.`); 
    return newBoard; 
};


export const gameCases = {
    [DROP_PIECE]: (state: IGameState, payload: number) => {
        return {
            ...state,
            board: dropPiece(state.board, payload, state.currentPlayer),
        };
    },
    [CHANGE_PLAYER]: (state: IGameState) => {
        return {
            ...state,
            currentPlayer: state.currentPlayer === 1 ? 2 : 1, 
        };
    },
    [SET_WINNER]: (state: IGameState, payload: number) => {
        return {
            ...state,
            winner: payload, 
        };
    },
    [SET_DRAW]: (state: IGameState) => {
      return {
          ...state,
          draw: true, 
      };
  },
    [RESET_GAME]: () => {
        return {
            ...gameInitialState, 
        };
    },
};

