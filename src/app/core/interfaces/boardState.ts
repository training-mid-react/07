export type Player = 'Player 1' | 'Player 2';

export type Cell = string | null;

export interface IBoard {
  board: Cell[][];
}
