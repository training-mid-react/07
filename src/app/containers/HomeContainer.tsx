import React from 'react';
import { useGameLogic } from '@core/hooks/useGameLogic';
import Board from '@components/Board/index';
import Button from '@components/Button';
import PlayerInfo from '@components/PlayerInfo/index';
import Title from '@components/Title';
import './style.scss';

const HomeContainer: React.FC = () => {
  const { board, currentPlayer, winner, isDraw, handleMove } = useGameLogic();

  const handleReset = () => {
    window.location.reload();
  };

  return (
    <div className="home-container">
      <div className="title-section">
        <Title as="h1">4 en Línea</Title>
        <Title as="h3">Empieza a jugar clickeando en el tablero</Title>
        {!winner && <PlayerInfo currentPlayer={currentPlayer} />}
      </div>

      <div className="game-board">
        <Board board={board} onMove={handleMove} disabled={!!winner || isDraw} />
      </div>

      <div className="status-section">
        {winner && <Title as="h2">Ganador: {winner}</Title>}
        {isDraw && <Title as="h2">¡Es un empate!</Title>}
      </div>

      {(winner || isDraw) && (
        <Button onClick={handleReset}>Reiniciar Juego</Button>
      )}
    </div>
  );
};

export default HomeContainer;
