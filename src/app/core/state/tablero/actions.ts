import { GameState } from "../../interfaces/gameState";

export const tableroActionTypes = {
    SET_TABLERO: "SET_TABLERO",
    SET_TABLERO_ROW: "SET_TABLERO_ROW",
    SET_TABLERO_COLUMN: "SET_TABLERO_COLUMN",
    SET_TABLERO_CELL: "SET_TABLERO_CELL",
    RESET_TABLERO: "RESET_TABLERO",
    DROP_COIN: "DROP_COIN",
    HANDLE_CLICK: "HANDLE_CLICK",
    VERIFY_WIN: "VERIFY_WIN",
    VERIFY_DRAW: "VERIFY_DRAW",
    CHANGE_TURN: "CHANGE_TURN",
};

export const setTablero = (tablero: number[][]) => {
    return {
        type: tableroActionTypes.SET_TABLERO,
        payload: tablero,
    };
};

export const resetTablero = () => {
    return {
        type: tableroActionTypes.RESET_TABLERO,
    };
};

export const changeTurn = (payload: GameState) => {
    return {
        type: tableroActionTypes.CHANGE_TURN,
        payload
    };
};

export const handleDrop = (columnDropped: number) => {
    return {
        type: tableroActionTypes.DROP_COIN,
        payload: columnDropped
    }
};

export const handleClick = (state: GameState) => {

    return {
        type: tableroActionTypes.HANDLE_CLICK,
        payload: state

    }
};

export const verifyWin = (state: GameState) => {
    return {
        type: tableroActionTypes.VERIFY_WIN,
        payload: state
    }
}

export const verifyDraw = (state: GameState) => {
    return {
        type: tableroActionTypes.VERIFY_DRAW,
        payload: state
    }
}