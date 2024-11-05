import { FC, createContext, useReducer } from 'react';
import { gameReducer, initialState } from '../reducers/gameReducer';
import { GameContextProps, GameProviderProps } from '../../../core/interfaces';

const GameContext = createContext<GameContextProps | undefined>(undefined);

export const GameProvider: FC<GameProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};

export { GameContext };
