import { GameAction } from '@interfaces/game';
import { IGameState } from '@interfaces/gameState';
import { boardCases } from './game';

const gameReducer = (state: IGameState, action: GameAction): IGameState => {
  const cases = { ...boardCases };

  return cases[action.type](state, action.payload) || state;
};

export default gameReducer;
