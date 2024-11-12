import { IAction, IState } from '@core/interfaces';
import { boardGameCases, boardGameInitialState } from './board-game';

export const initialState = {
    ...boardGameInitialState,
};

export const reducer = (state: IState, action: IAction): IState => {
    const cases = { ...boardGameCases };

    return cases[action.type](state, action.payload) || state;
};
