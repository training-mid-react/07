import React from 'react';
import Title from '@components/Title';
import './style.scss';

interface PlayerInfoProps {
  currentPlayer: string;
}

const PlayerInfo: React.FC<PlayerInfoProps> = ({ currentPlayer }) => {
  return (
    <div className="player-info">
      <Title as="h4">Turno de {currentPlayer}</Title>
    </div>
  );
};

export default PlayerInfo;
