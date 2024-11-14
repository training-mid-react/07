import './style.scss';

interface ICurrentPlayerProps {
  currentPlayer: number;
}

export const CurrentPlayer = ({ currentPlayer }: ICurrentPlayerProps) => {
  return (
    <div className="current-player">
      Es el turno del Jugador: 
      <span className={currentPlayer === 1 ? 'current-player__player1' : 'current-player__player2'}>
        {currentPlayer}
      </span>
    </div>
  );
};
