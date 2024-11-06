import { useState, useEffect } from 'react';
import './style.scss';

interface ColumnProps {
  columnIndex: number;
  dropPiece: (column: number) => void;
  columnData: number[];
}

function Column({ columnIndex, dropPiece, columnData }: ColumnProps) {
  const [droppingCell, setDroppingCell] = useState<number | null>(null);

  useEffect(() => {
    if (droppingCell !== null) {
      setTimeout(() => setDroppingCell(null), 4000);
    }
  }, [droppingCell]);

  const handleColumnClick = () => {
    const rowIndex = columnData.lastIndexOf(0);
    if (rowIndex !== -1) {
      setDroppingCell(rowIndex);
      dropPiece(columnIndex);
    }
  };

  return (
    <div className="column" onClick={handleColumnClick}>
      {columnData.map((cell, rowIndex) => {
        const isDropping = droppingCell === rowIndex;
        const cellClass = `cell ${cell === 1 ? 'cell--player1' : cell === 2 ? 'cell--player2' : ''} ${isDropping ? 'cell--dropping' : ''}`;
        console.log(cellClass)
        return (
          <div
            key={rowIndex}
            className={cellClass}
          />
        );
      })}
    </div>
  );
};

export default Column;
