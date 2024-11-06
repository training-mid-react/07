import Board from '@ui/components/Board';
import { useGameLogic } from '../core/hooks/useGameLogic';
import { CurrentPlayer } from '@ui/components/CurrentPlayer';
import { Result } from '@ui/components/Result';
import './style.scss';

export default function HomeContainer() {
  const {
    board,
    currentPlayer,
    winner,
    draw,
    handleDropPiece,
    onResetGame
  } = useGameLogic();

  return (
    <div className='board_wrapper'>
      <CurrentPlayer
        currentPlayer={currentPlayer}
      />
      <Board
        board={board}
        handleDropPiece={handleDropPiece}
      />
      <Result
        winner={winner}
        draw={draw}
        currentPlayer={currentPlayer}
        onResetGame={onResetGame}
      />
    </div>

  );
}