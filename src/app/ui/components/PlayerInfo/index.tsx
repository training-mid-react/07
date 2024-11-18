import React from 'react';
import Title from '@components/Title';
import './style.scss';

const players = [
  { name: 'Player 1', cellClass: 'cell-1' },
  { name: 'Player 2', cellClass: 'cell-2' },
];

const PlayerInfo: React.FC = () => {
  return (
    <div className="player-info" data-testid="player-info">
      {players.map((player) => (
        <div key={player.name} className="player-info_item" data-testid={`player-info_item-${player.cellClass}`}>
          <Title as="h4" data-testid={`player-info_item-${player.cellClass}`}>{player.name}</Title>
          <div className={`cell ${player.cellClass}`}data-testid={`player-cell-${player.name}`}></div>
        </div>
      ))}
    </div>
  );
};

export default PlayerInfo;
