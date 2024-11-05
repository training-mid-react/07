import { IMoveResult } from '@core/interfaces/moveResult';
import { Cell, Player } from '@interfaces/boardState';
import { checkWinner, checkDraw } from '@utils/boardUtils';

function findEmptyRow(board: Cell[][], column: number): number {
  for (let row = board.length - 1; row >= 0; row--) {
    if (!board[row][column]) return row;
  }
  return -1;
}

export function placePiece(
  board: Cell[][],
  column: number,
  currentPlayer: Player
): IMoveResult {
  const newBoard = board.map((row) => [...row]);
  const placedRow = findEmptyRow(newBoard, column);

  if (placedRow === -1) {
    return { newBoard, nextPlayer: currentPlayer, winner: null, isDraw: false };
  }

  newBoard[placedRow][column] = currentPlayer;

  const winnerExists  = checkWinner(newBoard, placedRow, column);
  const isDraw = checkDraw(newBoard);

  return {
    newBoard,
    nextPlayer: currentPlayer === 'Player 1' ? 'Player 2' : 'Player 1',
    winner: winnerExists ? currentPlayer : null,
    isDraw,
  };
}
