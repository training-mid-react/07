import { GameState } from '../../interfaces/gameState';
import { tableroActionTypes } from './actions';


export const tableroInitialState: GameState = {
    tablero: Array(6).fill(Array(7).fill(null)),
    tableroRow: 0,
    tableroColumn: 0,
    tableroCell: 0,
    isPlayerOneTurn: true
}


export const tableroCases = {

    [tableroActionTypes.SET_TABLERO]: (state: GameState) => {
        return {
            ...state
        }
    },

    [tableroActionTypes.RESET_TABLERO]: () => {
        return tableroInitialState
    },

    [tableroActionTypes.CHANGE_TURN]: (state: GameState) => {
        return {
            ...state,
            isPlayerOneTurn: !state.isPlayerOneTurn
        }
    },

    [tableroActionTypes.DROP_COIN]: (state: GameState, payload: number) => {
        const { tablero, isPlayerOneTurn } = state
        const auxBoard = tablero.map(row => [...row]);

        for (let row = auxBoard.length - 1; row >= 0; row--) {
            // Verificar si la celda está vacía
            if (auxBoard[row][payload] === null) {
                // Colocar la ficha del jugador actual
                auxBoard[row][payload] = isPlayerOneTurn ? 1 : 2;

                //   // Actualizar el tablero y alternar el turno del jugador
                //   setBoard(auxBoard);
                //   setIsPlayerOneTurn(!isPlayerOneTurn);

                //   // Romper el bucle una vez que se haya colocado la ficha
                break;
            }
        }

        return {
            ...state,
            tablero: auxBoard
        }

    }

}