import { useState } from 'react';
import { BoardMatrix, Player } from '../../../core/interfaces/board-state';
import './style.scss';

interface Props{
  board: BoardMatrix,
  handleSelectColumn: (column: number) => void
  currentPlayer: Exclude<Player, 'draw'>
}
export const Board = ({board, handleSelectColumn, currentPlayer}: Props) => {
  
  const [animatedCell, setAnimatedCell] = useState<{ col: number; row: number } | null>(null);

  const handleCellClick = (colIndex: number) => {
    const rowIndex = board.findIndex(row => row[colIndex] === null);
    if (rowIndex !== -1) {
      setAnimatedCell({ col: colIndex, row: rowIndex });
      setTimeout(() => {
        handleSelectColumn(colIndex);
        setAnimatedCell(null);
      }, 500); 
    }
  };

  return (
    
    <div className="board">
      {
        board.map((row, rowIndex) => {
          return (
            <div 
              key={`row_${rowIndex}`} 
              className='board__row'
            >
              {row.map((cell, colIndex) => {
                const isFalling = animatedCell?.col === colIndex && animatedCell.row >= rowIndex;
                const fallDistance = isFalling ? `${50 * (animatedCell!.row - rowIndex)}px` : '0px';
                const animationFall = {
                  transform: `translateY(${fallDistance})`,
                };
                return( 
                  <div 
                    key={`cell_${colIndex}`} 
                    data-testid={`cell_${rowIndex}_${colIndex}`}
                    className={`board__col ${cell || ''} ${isFalling ? `falling--${currentPlayer}` : ''}`}  
                    onClick={() => handleCellClick(colIndex)}
                    style={isFalling ? animationFall : {}}
                  />
                );
              })}
            </div>
          );
        })
      }
      
    </div>
  );
};
