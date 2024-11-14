import { createContext, useReducer } from "react";
import { Icontext, IState } from "../interfaces/state";
import { initialState, reducer } from "./reducer";

// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext<Icontext>({ state: {} as IState, dispatch: () => { } });

export const AppProvider = ({ children }: { children: React.ReactNode }) => {


    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );


}