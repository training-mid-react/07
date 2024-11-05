import {
  GAME_ACTIONS,
  GameActionReducer,
  GameState,
  PLAYER,
} from '../../../core/interfaces';
import { checkForFourInARow } from '../../../core/utils/checkForFourInARow';

export const initialState: GameState = {
  board: Array(6).fill(Array(7).fill(null)),
  currentPlayer: PLAYER.PLAYER1,
  winner: null,
  isDraw: false,
  isDropping: false,
};

export const gameReducer = (
  state: GameState,
  action: GameActionReducer
): GameState => {
  switch (action.type) {
    case GAME_ACTIONS.DROP_TOKEN: {
      const { columnIndex } = action;

      const newBoard = state.board.map((row) => [...row]);

      let rowToPlace = -1;
      for (let row = 0; row <= 5; row++) {
        if (newBoard[row][columnIndex] === null) {
          rowToPlace = row;
          break;
        }
      }

      if (rowToPlace === -1 || state.winner) return state;

      newBoard[rowToPlace][columnIndex] = state.currentPlayer;

      const newWinner = checkForFourInARow(
        newBoard,
        rowToPlace,
        columnIndex,
        state.currentPlayer
      );

      const isDraw = newBoard.every((row) =>
        row.every((cell) => cell !== null)
      );

      return {
        ...state,
        board: newBoard,
        currentPlayer:
          state.currentPlayer === PLAYER.PLAYER1
            ? PLAYER.PLAYER2
            : PLAYER.PLAYER1,
        winner: newWinner,
        isDraw,
        isDropping: true,
      };
    }
    case GAME_ACTIONS.RESET_GAME:
      return initialState;
    default:
      return state;
  }
};
