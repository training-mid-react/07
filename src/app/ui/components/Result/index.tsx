import './style.scss';

interface IResult {
    currentPlayer: number,
    winner: number | null,
    draw: boolean,
    onResetGame: () => void,
}

export const Result = ({ winner, draw, currentPlayer, onResetGame }: IResult) => {
    if (winner) {
        return (
            <div className='new-game'><button className='new-game_button' onClick={() => onResetGame()}>Jugar de nuevo</button><div className="result">¡El Ganador es el Jugador {winner}! <span className={currentPlayer === 1 ? 'result__player2' : 'result__player1'}></span> 🎉</div></div>
        )
    } if (draw && !winner) {
        return (
            <div className='new-game'><button className='new-game_button' onClick={() => onResetGame()}>Jugar de nuevo</button><div className="result">¡Es un Empate! 👌</div></div>
        )
    }
    return <div />

}