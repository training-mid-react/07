import React from 'react';
import { Cell } from '@interfaces/boardState';
import './style.scss';

interface BoardProps {
  board: Cell[][];
  onMove: (column: number) => void;
  disabled: boolean;
}

const Board: React.FC<BoardProps> = ({ board, onMove, disabled }) => {
  return (
    <div className="board">
      {board.map((row, rowIndex) =>
        row.map((cell, colIndex) => {
          const cellClass = cell === 'Player 1' ? 'cell-1' : cell === 'Player 2' ? 'cell-2' : '';
          const disabledClass = disabled ? 'disabled' : '';

          return (
            <div key={`${rowIndex}-${colIndex}`} className={`cell ${cellClass} ${disabledClass}`} onClick={() => !disabled && onMove(colIndex)} />
          );
        })
      )}
    </div>
  );
};

export default Board;
