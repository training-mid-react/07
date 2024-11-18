import { Cell, Player } from './boardState';

export interface IGameState {
  board: Cell[][];
  currentPlayer: Player;
  winner: string | null;
  isDraw: boolean;
}

export const initialState: IGameState = {
  board: Array(6).fill(null).map(() => Array(7).fill(null)), 
  currentPlayer: 'Player 1', 
  winner: null,
  isDraw: false,
};
