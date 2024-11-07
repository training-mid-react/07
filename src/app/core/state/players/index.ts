import { PLAYER1, PLAYER2 } from "../../constants/constants";
import { IPlayer, IPlayersState } from "../../interfaces/player.interface";
import { playersActions } from './actions';


export const playersInitialState: IPlayersState = {
    player1: PLAYER1,
    player2: PLAYER2
};

export const playerCases = {
    [playersActions.CHANGE_NAME_PLAYER]: (state: IPlayersState, payload: IPlayer) => {
        return {
            ...state,
            player1: state.player1.id === payload.id ? payload : state.player1,
            player2: state.player2.id === payload.id ? payload : state.player2,
        };
    },
    [playersActions.RESET_PLAYERS]: (state: IPlayersState, payload: IPlayersState) => {
        return {
            ...payload,
        };
    },
};