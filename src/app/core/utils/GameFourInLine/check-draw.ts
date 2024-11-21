import { BoardMatrix } from '../../interfaces/board-state';

export const checkDraw = (board: BoardMatrix): boolean => {
  return board.every((row) => row.every(cell => cell !== null));
};