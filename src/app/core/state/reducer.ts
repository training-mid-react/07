import { IAction, IState } from '../interfaces/state';
import { boardCases, boardInitialState } from './board-game';

export const initialState = {
  ...boardInitialState,
};

export const reducer = (state: IState, action: IAction) => {
  const cases = { 
    ... boardCases,
  };

  // const cases = { ...cardsCases, ...gameCases };
  return cases[action.type](state, action.payload) || state;
};