import { useContext } from 'react';
import { placePiece } from '@services/game.service';
import { AppContext } from '@state/AppContext';
import { Cell, Player } from '@interfaces/boardState';
import { gameActions } from '@core/state/game/actions';

export function useGameLogic() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useGameLogic must be used within an AppContextProvider');
  }

  const { state, dispatch } = context;

  const dispatchMultipleActions = (actions: { type: string; payload: React.ReactNode }[]) => {
    actions.forEach((action) => dispatch(action));
  };

  const handleMove = (column: number) => {
    if (state.winner || state.isDraw) return;

    const result = placePiece(
      state.board as Cell[][],
      column,
      state.currentPlayer as Player
    );

    if (result) {
      const actions = [
        { type: gameActions.UPDATE_BOARD, payload: result.newBoard },
        { type: gameActions.SET_NEXT_PLAYER, payload: result.nextPlayer },
        ...(result.winner ? [{ type: gameActions.SET_WINNER, payload: result.winner }] : []),
        ...(result.isDraw ? [{ type: gameActions.SET_DRAW, payload: true }] : [])
      ];

      dispatchMultipleActions(actions);
    }
  };

  return {
    board: state.board,
    currentPlayer: state.currentPlayer,
    winner: state.winner,
    isDraw: state.isDraw,
    handleMove,
  };
}
