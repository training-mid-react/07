import { Player } from '@core/interfaces/board-state';
import './style.scss';

interface Props{
  currentPlayer: Player
}
export const ScoreBoard = ({currentPlayer}:Props) => {

  return (
    <>
      <article className='score-board'>
        <div className='score-board__player'>
          <div className="score-board__image score-board__image--player1"/>
          <p className='score-board__layer'> 
          Player 1 
          </p>
        </div>
        <div className='score-board__player'>
          <div className="score-board__image score-board__image--player2"/>
          <p className='score-board__layer'> 
          Player 2
          </p>
        </div>
      </article>

      <section className='current-player'>
        <h3 className='current-player__label'>
          Turn {currentPlayer}  
        </h3>
        { currentPlayer === 'player1' 
          ? ( <div className="current-player__image current-player__image--player1"/>)
          : ( <div className="current-player__image current-player__image--player2"/>)
        }
      </section>
    </>
  );
};
