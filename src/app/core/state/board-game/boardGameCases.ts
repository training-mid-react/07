import { boardGameActions } from './boardGameActions';
import { IBoardGameState, IPlayer } from '@core/interfaces';
import { OptionsColors } from '@core/types';
import { ROWS, COLS } from '@core/constants';

export const boardGameCases = {
    [boardGameActions.SET_PLAYERES]: (
        state: IBoardGameState,
        payload?: IPlayer[]
    ) => {
        return { ...state, players: payload };
    },

    [boardGameActions.SET_WINNER]: (
        state: IBoardGameState,
        payload?: string
    ) => {
        return { ...state, winner: payload };
    },

    [boardGameActions.UPDATE_BOARD]: (
        state: IBoardGameState,
        payload: OptionsColors[][]
    ) => {
        return { ...state, board: payload };
    },

    [boardGameActions.RESET_STATE]: (
        _?: IBoardGameState,
        _payload?: OptionsColors[][]
    ): IBoardGameState => {
        return {
            winner: '',
            board: new Array(ROWS + 1)
                .fill(null)
                .map(() => new Array(COLS).fill(null)),
            players: [],
        };
    },
};
