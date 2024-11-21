import { COLUMNS, IBoardGameState, Player,  ROWS } from '../../interfaces/board-state';
import { BoardActionsType } from './actions';

// ==> Initial state
export const boardInitialState: IBoardGameState = {
  board: Array.from({ length: ROWS }, () => Array(COLUMNS).fill(null)),
  currentPlayer: 'player1',
  winner:  null,
};

// ===> Cases to modify state
export const boardCases =  {
  [BoardActionsType.ADD_PEAK] : (state: IBoardGameState, payload: Player[][]) => {
    return {
      ...state,
      board: payload
    };
  },

  [BoardActionsType.CHANGE_PLAYER] : (state: IBoardGameState, payload: Player) => {
    const newPlayer = payload ==='player1' ? 'player2' : 'player1';
    return {
      ...state,
      currentPlayer: newPlayer
    };
  },

  [BoardActionsType.SET_WINNER] : (state: IBoardGameState, payload: string) => {
    return {
      ...state,
      winner: payload
    };
  },

  [BoardActionsType.RESET_GAME]: (state: IBoardGameState) => {
    return {
      ...state,
      board: Array.from({ length: ROWS }, () => Array(COLUMNS).fill(null)),
      currentPlayer: 'player1',
      winner:  null,
    };
  },

};

