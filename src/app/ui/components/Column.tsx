import { FC } from 'react';
import { Cell } from './Cell';
import { ColumnProps } from '../../../core/interfaces';
import { useGameContext } from '../../../core/hooks/useGameContext';

export const Column: FC<ColumnProps> = ({ columnIndex }) => {
  const { state, dispatch } = useGameContext();
  const { board, winner } = state;

  const handleDrop = () => {
    if (!winner) {
      dispatch({ type: 'DROP_TOKEN', columnIndex });
    }
  };

  return (
    <div className="column" onClick={handleDrop}>
      {board.map((_, rowIndex) => (
        <Cell key={rowIndex} value={board[rowIndex][columnIndex]} />
      ))}
    </div>
  );
};
