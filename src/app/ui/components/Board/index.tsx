import React from 'react';
import { TbReload } from 'react-icons/tb';
import { Cell } from '@interfaces/boardState';
import PlayerInfo from '@components/PlayerInfo';
import './style.scss';

interface BoardProps {
  board: Cell[][];
  currentPlayer: string;
  disabled: boolean;
  onMove: (column: number) => void;
  handleReset: () => void;
}

const Board: React.FC<BoardProps> = ({ board, onMove, disabled, handleReset }) => {
  return (
    <div className="board-container">
      <PlayerInfo />
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
      <TbReload color='#64d439cc' size={40} onClick={handleReset} />
    </div>
  );
};

export default Board;
