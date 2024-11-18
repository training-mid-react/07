import { IGameState } from '@interfaces/gameState';
import { gameActions } from './actions';

export const boardCases = {
   [gameActions.UPDATE_BOARD]: (state: IGameState, payload: React.ReactNode) => ({
    ...state,
    board: payload,
  }),

  [gameActions.SET_WINNER]: (state: IGameState, payload: React.ReactNode) => ({
    ...state,
    winner: payload,
  }),

  [gameActions.SET_DRAW]: (state: IGameState, payload: React.ReactNode) => ({
    ...state,
    isDraw: payload,
  }),

  [gameActions.SET_NEXT_PLAYER]: (state: IGameState, payload: React.ReactNode) => ({
    ...state,
    currentPlayer: payload,
  }),
};

export type { IGameState };
