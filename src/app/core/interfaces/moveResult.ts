import { Cell, Player } from './boardState';

export interface IMoveResult {
  newBoard: Cell[][];
  nextPlayer: Player;
  winner: string | null;
  isDraw: boolean;
}
