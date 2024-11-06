import React from 'react';
import Title from '@components/Title';
import './style.scss';

const players = [
  { name: 'Player 1', cellClass: 'cell-1' },
  { name: 'Player 2', cellClass: 'cell-2' },
];

const PlayerInfo: React.FC = () => {
  return (
    <div className="player-info">
      {players.map((player) => (
        <div key={player.name} className="player-info-item">
          <Title as="h4">{player.name}</Title>
          <div className={`cell ${player.cellClass}`}></div>
        </div>
      ))}
    </div>
  );
};

export default PlayerInfo;
