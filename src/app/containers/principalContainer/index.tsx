import { GameProvider } from '../../state/context/GameContext';
import { PrincipalPage } from '../../ui/layouts/principalPage';

export const PrincipalContainer = () => {
  return (
    <GameProvider>
      <PrincipalPage />
    </GameProvider>
  );
};
