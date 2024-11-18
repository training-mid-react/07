/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useReducer, ReactNode } from 'react';
import { initialState } from '@interfaces/gameState';
import { GameAction } from '@interfaces/game';
import { IGameState } from './game';
import gameReducer from './reducer';

interface AppContextProps {
  state: IGameState;
  dispatch: React.Dispatch<GameAction>;
}

export const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
