import React, { ReactNode } from 'react';
import { AppContext } from './AppContext';
import gameReducer from './reducer';

interface MockAppContextProviderProps {
  children: ReactNode;
  initialGameState: any;
}

export const MockAppContextProvider: React.FC<MockAppContextProviderProps> = ({ children, initialGameState }) => {
  const [state, dispatch] = React.useReducer(gameReducer, initialGameState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
