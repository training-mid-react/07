import { useContext } from 'react';
import { ROWS } from '@core/interfaces/board-state';
import { AppContext } from '@core/state/AppContext';
import { checkWin, checkDraw } from '@core/utils/GameFourInLine';
import { addPeak, setWinner, changePlayer, resetGame } from '@core/state/board-game/actions';

export const usePlayFourInLine = () => {
  const {dispatch, state} = useContext(AppContext);
  const {
    board,
    winner, 
    currentPlayer,
  } = state;
    
  const handleColumnClick = (colIndex: number) => {
    console.log({colIndex});
    if (winner) return;
  
    for (let row = ROWS - 1; row >= 0; row--) {
        
      if (!board[row][colIndex]) {
        const newBoard = state.board.map(row => [...row]);
        newBoard[row][colIndex] = currentPlayer;
        dispatch(addPeak(newBoard));
          
        // ==> We comprobate the victory
        const isWin = checkWin(newBoard, row, colIndex, currentPlayer);
        if (isWin) {
          dispatch(setWinner(currentPlayer));
          return;
        } 

        const isDraw = checkDraw(newBoard);
        if(isDraw){
          dispatch(setWinner('draw'));
          return;
        }
        
        dispatch(changePlayer(currentPlayer));
        return;
      }
    }
  };

  const handleResetGame = () => dispatch(resetGame());

  return {
    board,
    handleColumnClick,
    currentPlayer,

    winner,
    handleResetGame
  };
};
