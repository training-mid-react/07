import { BoardMatrix } from '../../../core/interfaces/board-state';
import './style.scss';

interface Props{
  board: BoardMatrix,
  handleSelectColumn: (column: number) => void
}
export const Board = ({board, handleSelectColumn}: Props) => {
  
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
                return( 
                  <div 
                    key={`cell_${colIndex}`} 
                    className={`board__col ${cell || ''}`}
                    onClick={ () => handleSelectColumn(colIndex)}
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
