import { GameAction } from '@interfaces/game';
import { IGameState, initialState } from '@interfaces/gameState';
import { gameActions } from './game/actions';

const gameReducer = (state: IGameState, action: GameAction): IGameState => {
  switch (action.type) {
    case gameActions.UPDATE_BOARD:
      return {
        ...state,
        board: action.payload,
      };

    case gameActions.SET_WINNER:
      return {
        ...state,
        winner: action.payload,
      };

    case gameActions.SET_DRAW:
      return {
        ...state,
        isDraw: true,
      };

    case gameActions.SET_NEXT_PLAYER:
      return {
        ...state,
        currentPlayer: action.payload,
      };

    case gameActions.RESET_GAME:
      return initialState;

    default:
      return state;
  }
};

export default gameReducer;
