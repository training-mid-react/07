import { useEffect } from 'react';
import Column from '../Column';
import './style.scss';
import { useAppContext } from '../../../core/state/AppContext';
import { changePlayer, dropPiece, resetGame, setWinner, setDraw } from '../../../core/state/cards/actions'; // Asegúrate de tener la acción setDraw

const ROWS = 6;
const COLS = 7;

const Board: React.FC = () => {
    const { state, dispatch } = useAppContext();
    const { board, currentPlayer, winner, draw } = state;

    useEffect(() => {
        if (winner) {
            return;
        }
        checkWinner(board);
        checkDraw(board);
    }, [board, winner]);

    const checkWinner = (board: number[][]) => {
        for (let row = 0; row < ROWS; row++) {
            for (let col = 0; col < COLS; col++) {
                const player = board[row][col];
                if (player !== 0) {
                    
                    if (col + 3 < COLS && player === board[row][col + 1] && player === board[row][col + 2] && player === board[row][col + 3]) {
                        dispatch(setWinner(player));
                        return;
                    }
                    
                    if (row + 3 < ROWS && player === board[row + 1][col] && player === board[row + 2][col] && player === board[row + 3][col]) {
                        dispatch(setWinner(player));
                        return;
                    }
                    
                    if (row + 3 < ROWS && col + 3 < COLS && player === board[row + 1][col + 1] && player === board[row + 2][col + 2] && player === board[row + 3][col + 3]) {
                        dispatch(setWinner(player));
                        return;
                    }
                    
                    if (row - 3 >= 0 && col + 3 < COLS && player === board[row - 1][col + 1] && player === board[row - 2][col + 2] && player === board[row - 3][col + 3]) {
                        dispatch(setWinner(player));
                        return;
                    }
                }
            }
        }
    };

    const checkDraw = (board: number[][]) => {
        const isFull = board.every(row => row.every(cell => cell !== 0));
        if (isFull && !winner) {
            dispatch(setDraw()); 
        }
    };

    const handleDropPiece = (column: number) => {
        if (winner || draw) return; 

        dispatch(dropPiece(column));
        dispatch(changePlayer()); 
    };

    return (
        <div className='board_wrapper'>
            <div className="current-player">
                Es el turno del Jugador: <span className={currentPlayer === 1 ? 'player1' : 'player2'}>{currentPlayer}</span>
            </div>
            <div className="board">
                {board[0].map((_, colIndex) => (
                    <Column
                        key={colIndex}
                        columnIndex={colIndex}
                        dropPiece={handleDropPiece}
                        columnData={board.map(row => row[colIndex])}
                    />
                ))}
            </div>
            {winner && <div className='new-game'><button className='new-game_button' onClick={() => dispatch(resetGame())}>Jugar de nuevo</button><div className="winner">¡El Ganador es el Jugador {winner}! <span className={currentPlayer === 1 ? 'player2' : 'player1'}></span> 🎉</div></div>}
            {draw && !winner && <div className='new-game'><button className='new-game_button' onClick={() => dispatch(resetGame())}>Jugar de nuevo</button><div className="winner">¡Es un Empate! 👌</div></div>}
        </div>
    );
};

export default Board;
