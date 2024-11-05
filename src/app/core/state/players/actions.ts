import { PLAYER1, PLAYER2 } from "../../constants/constants";
import { IPlayer } from "../../interfaces/player.interface";

export const playersActions = {
    CHANGE_NAME_PLAYER: "CHANGE_NAME_PLAYER",
    RESET_PLAYERS: "RESET_PLAYERS"
};

export const changeNamePlayer = (player: IPlayer) => ({
    type: playersActions.CHANGE_NAME_PLAYER,
    payload: player,
});

export const resetPlayers = () => ({
    type: playersActions.RESET_PLAYERS,
    payload: {
        player1: PLAYER1,
        player2: PLAYER2
    }
})