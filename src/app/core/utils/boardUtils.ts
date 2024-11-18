import { Cell } from '@interfaces/boardState';

export function checkWinner(board: Cell[][], row: number, column: number): string | null {
  const playerSymbol = board[row][column];
  if (!playerSymbol) return null;

  const directions = [
    { row: 0, col: 1 },  
    { row: 1, col: 0 }, 
    { row: 1, col: 1 },   
    { row: 1, col: -1 }  
  ];

  return directions.some(direction => countInBothDirections(board, row, column, direction.row, direction.col, playerSymbol) >= 4) ? playerSymbol : null;
}

function countInBothDirections(
  board: Cell[][],
  startRow: number,
  startCol: number,
  rowDir: number,
  colDir: number,
  playerSymbol: Cell
): number {
  return (
    1 +
    countInDirection(board, startRow, startCol, rowDir, colDir, playerSymbol) +
    countInDirection(board, startRow, startCol, -rowDir, -colDir, playerSymbol)
  );
}

export function countInDirection(
  board: Cell[][],
  startRow: number,
  startCol: number,
  rowDir: number,
  colDir: number,
  playerSymbol: Cell
): number {
  let count = 0;
  let row = startRow + rowDir;
  let col = startCol + colDir;

  while (
    row >= 0 && row < board.length &&
    col >= 0 && col < board[0].length &&
    board[row][col] === playerSymbol
  ) {
    count++;
    row += rowDir;
    col += colDir;
  }

  return count;
}

export function checkDraw(board: Cell[][]): boolean {
  return board.every(row => row.every(cell => cell !== null));
}
