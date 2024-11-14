import './style.scss';
import { useDropCell } from '../../../core/hooks/useDropCell';

interface ColumnProps {
  columnIndex: number;
  dropPiece: (column: number) => void;
  columnData: number[];
}

function Column({ columnIndex, dropPiece, columnData }: ColumnProps) {
  const { handleColumnClick, droppingCell } = useDropCell({ columnIndex, dropPiece, columnData });

  return (
    <div
      className="column"
      onClick={handleColumnClick}
      data-testid={`column-${columnIndex}`}
    >
      {columnData.map((cell, rowIndex) => {
        const isDropping = droppingCell === rowIndex;
        const cellClass = `cell ${cell === 1 ? 'cell--player1' : cell === 2 ? 'cell--player2' : ''} ${isDropping ? 'cell--dropping' : ''}`;
        return (
          <div
            key={rowIndex}
            className={cellClass}
            data-testid={`cell-${columnIndex}-${rowIndex}`}
          />
        );
      })}
    </div>
  );
}

export default Column;
