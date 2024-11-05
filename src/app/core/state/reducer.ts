import { IAction, IState } from "../interfaces/state";
import { gameCases, gameInitialState } from "./game";
import { playerCases, playersInitialState } from "./players";

export const initialState: IState = {
    ...gameInitialState,
    ...playersInitialState
}

export const reducer = (state: IState, action: IAction) => {
    const cases = {
        ...gameCases,
        ...playerCases,
    }
    return {
        ...state,
        ...cases[action.type](state, action.payload),
    }
};