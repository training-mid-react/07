import React from 'react';
import { useGameLogic } from '@core/hooks/useGameLogic';
import Board from '@components/Board/index';
import Button from '@components/Button';
import Title from '@components/Title';
import LayoutMain from '@ui/layouts/LayoutMain';
import PlayerInfo from '@ui/components/TurnInfo';

const HomeContainer: React.FC = () => {
  const { board, currentPlayer, winner, isDraw, handleMove } = useGameLogic();

  const handleReset = () => {
    window.location.reload();
  };

  return (
    <LayoutMain>
        <Title as="h1">4 en Línea</Title>
        <Title as="h3">Empieza a jugar clickeando en el tablero</Title>
        {!winner && <PlayerInfo currentPlayer={currentPlayer} />}

        <Board handleReset={handleReset} board={board} onMove={handleMove} disabled={!!winner || isDraw} currentPlayer={currentPlayer} />

        {winner && <Title as="h2">Ganador: {winner}</Title>}
        {isDraw && <Title as="h2">¡Es un empate!</Title>}

      {(winner || isDraw) && (
        <Button onClick={handleReset}>Reiniciar Juego</Button>
      )}
    </LayoutMain>
  );
};

export default HomeContainer;
