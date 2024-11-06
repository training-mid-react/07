import React, { createContext, useReducer, useContext, ReactNode } from 'react';
import { gameReducer } from './reducers';
import { IAppContextProps, IGameState } from '../interfaces/state';

const AppContext = createContext<IAppContextProps | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const initialState: IGameState = {
        board: Array.from({ length: 6 }, () => Array(7).fill(0)),
        currentPlayer: 1,
        winner: null,
        draw: false,
    };

    const [state, dispatch] = useReducer(gameReducer, initialState);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};
