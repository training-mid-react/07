import { useContext } from 'react';
import { GameContext } from '../../app/state/context/GameContext';

export const useGameContext = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGameContext needs a GameProvider');
  }
  return context;
};
