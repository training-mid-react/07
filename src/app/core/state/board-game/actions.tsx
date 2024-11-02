import { Player } from '../../interfaces/board-state';

// ==> Types
export enum BoardActionsType {
    ADD_PEAK = 'ADD_PEAK',
    CHANGE_PLAYER = 'CHANGE_PLAYER',
    SET_WINNER = 'SET_WINNER',
    RESET_GAME = 'RESET_GAME',
}

// ==> Actions
export const addPeak = (payload: Player[][]) => ({
  type: BoardActionsType.ADD_PEAK, 
  payload
});

export const changePlayer = (currentePlayer: Player) => ({
  type: BoardActionsType.CHANGE_PLAYER, 
  payload: currentePlayer
});

export const setWinner = (player: Player) => ({
  type: BoardActionsType.SET_WINNER, 
  payload: player
});

export const resetGame = () => ({
  type: BoardActionsType.RESET_GAME, 
});

