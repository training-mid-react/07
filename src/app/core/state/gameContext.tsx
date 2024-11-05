import { createContext, ReactNode, useReducer } from "react";
import { IContext, IState } from "../interfaces/state";
import { initialState, reducer } from "./reducer";


export const GameContext = createContext<IContext>({
   state: {} as IState,
   dispatch: () => {},
});

export const GameProvider = ({ children }: {children: ReactNode}) => {
   const [state, dispatch] = useReducer(reducer, initialState);
   return (
      <GameContext.Provider value={{ state, dispatch }}>
         {children}
      </GameContext.Provider>
   );
};