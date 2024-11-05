import { FC } from 'react';
import { Cell } from '../Cell';
import { IBoard } from '../../../../core/interfaces';
import './style.scss';

export interface ColumnProps {
  columnIndex: number;
  board: IBoard;
  handleDrop: (columnIndex: number) => void;
}

export const Column: FC<ColumnProps> = ({ columnIndex, board, handleDrop }) => {
  return (
    <div className="column" onClick={() => {console.log(columnIndex);
     handleDrop(columnIndex)}}>
      {board.map((_, rowIndex) => (
        <Cell key={rowIndex} value={board[rowIndex][columnIndex]} />
      ))}
    </div>
  );
};
