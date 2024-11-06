import Column from '../Column';
import './style.scss';

interface IBoard {
    board: number[][],
    handleDropPiece: (column: number) => void,
}

const Board = ({ board, handleDropPiece }: IBoard) => {
    return (
        <div className="board">
            {board[0].map((_, colIndex: number) => (
                <Column
                    key={colIndex}
                    columnIndex={colIndex}
                    dropPiece={handleDropPiece}
                    columnData={board.map((row: number[]) => row[colIndex])}
                />
            ))}
        </div>
    );
};

export default Board;
