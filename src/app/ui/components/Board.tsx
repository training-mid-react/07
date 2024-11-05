import { useGameContext } from '../../../core/hooks/useGameContext';
import { Column } from './Column';

export const Board = () => {
  const { state } = useGameContext();
  const { board } = state;

  return (
    <div className="board">
      {board.map((_, colIndex) => (
        <Column key={colIndex} columnIndex={colIndex} />
      ))}
      <Column key={board.length} columnIndex={board.length} />
    </div>
  );
};
