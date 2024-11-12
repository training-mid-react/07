import { IPlayer } from '@core/interfaces';
import { OptionsColors } from '@core/types';
import { boardGameInitialState, boardGameActions } from '.';

export const setPlayeres = (player: IPlayer[]) => ({
    type: boardGameActions.SET_PLAYERES,
    payload: player,
});

export const setCurrentPlayer = (player: OptionsColors) => ({
    type: boardGameActions.SET_CURRENT_PLAYER,
    payload: player,
});

export const setWinner = (player: string) => ({
    type: boardGameActions.SET_WINNER,
    payload: player,
});

export const updateBoard = (board: OptionsColors[][]) => ({
    type: boardGameActions.UPDATE_BOARD,
    payload: board,
});

export const resetState = () => ({
    type: boardGameActions.RESET_STATE,
    payload: boardGameInitialState,
});
