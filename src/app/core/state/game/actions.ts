import { Cell, Player } from '@interfaces/boardState';

export const gameActions = {
  UPDATE_BOARD: 'UPDATE_BOARD',
  SET_WINNER: 'SET_WINNER',
  SET_DRAW: 'SET_DRAW',
  SET_NEXT_PLAYER: 'SET_NEXT_PLAYER',
  RESET_GAME: 'RESET_GAME',
  ERROR : 'ERROR',
};

export const updateBoard = (board: Cell[][]) => ({
  type: gameActions.UPDATE_BOARD,
  payload: board,
});

export const setWinner = (winner: Player) => ({
  type: gameActions.SET_WINNER,
  payload: winner,
});

export const setDraw = (isDraw: boolean) => ({
  type: gameActions.SET_DRAW,
  payload: isDraw,
});

export const setNextPlayer = (nextPlayer: Player) => ({
  type: gameActions.SET_NEXT_PLAYER,
  payload: nextPlayer,
});

export const resetGame = () => ({
  type: gameActions.RESET_GAME,
});

export const error = (message: string) => ({
  type: gameActions.ERROR,
  payload: message,
});
