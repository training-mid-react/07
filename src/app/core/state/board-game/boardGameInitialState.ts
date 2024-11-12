import { BASE_MATRIZ } from '@core/constants';
import { IBoardGameState } from '@core/interfaces';

export const boardGameInitialState: IBoardGameState = {
    winner: '',
    board: BASE_MATRIZ,
    players: [],
};
