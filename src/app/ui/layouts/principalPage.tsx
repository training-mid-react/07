import { useGameContext } from '../../../core/hooks/useGameContext';
import { Board } from '../components/Board';
import './../../ui/styles/index.scss';

export const PrincipalPage = () => {
  const { state } = useGameContext();
  const { winner, isDraw, currentPlayer } = state;

  return (
    <div className="app__background">
      <h1>Connect 4</h1>
      <p className="app__p">{`play ${currentPlayer}`}</p>
      <Board />
      <p className="app__p">{winner && `Player ${winner} wins!`}</p>
      <p className="app__p">{isDraw && `Draw!`}</p>
    </div>
  );
};
