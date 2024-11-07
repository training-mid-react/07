import React from 'react';
import Title from '@components/Title';
import './style.scss';

interface TurnInfoProps {
  currentPlayer: string;
}

const TurnInfo: React.FC<TurnInfoProps> = ({ currentPlayer }) => {
  return (
    <div className="turn-info" data-testid="turn-info">
      <Title as="h3">
        Turno de {currentPlayer}
      </Title>
    </div>
  );
};

export default TurnInfo;
