import { BoardMatrix, Cell, COLUMNS, ROWS, WINNING_LENGTH } from '../../interfaces/board-state';

/**
 * 
 * @param board Matrix for analize
 * @param row index of the current pice
 * @param col index of the current pice
 * @param player string that describe the player
 * @returns 
 */
export const checkWin = (board: BoardMatrix, row: number, col: number, player: Cell): boolean => {
  return (
    checkDirection(board, row, col, player, 0, 1)     || // Horizontal
        checkDirection(board, row, col, player, 1, 0) || // Vertical
        checkDirection(board, row, col, player, 1, 1) || // Diagonal descendente
        checkDirection(board, row, col, player, 1, -1)   // Diagonal ascendente
  );
};

const checkDirection = (
  board: BoardMatrix,
  row: number,
  col: number,
  player: Cell,
  rowDir: number,
  colDir: number
): boolean => {
  let count = 1;
  
  // Ver hacia adelante en la dirección indicada
  for (let i = 1; i < WINNING_LENGTH; i++) {
    const newRow = row + rowDir * i;
    const newCol = col + colDir * i;
    if (newRow < 0 || newRow >= ROWS || newCol < 0 || newCol >= COLUMNS || board[newRow][newCol] !== player) {
      break;
    }
    count++;
  }
  
  // Ver hacia atrás en la dirección opuesta
  for (let i = 1; i < WINNING_LENGTH; i++) {
    const newRow = row - rowDir * i;
    const newCol = col - colDir * i;
    if (newRow < 0 || newRow >= ROWS || newCol < 0 || newCol >= COLUMNS || board[newRow][newCol] !== player) {
      break;
    }
    count++;
  }
  
  return count >= WINNING_LENGTH;
};