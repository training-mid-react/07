import { describe, expect, it } from 'vitest';
import { IPlayer } from '../../../../../src/app/core/interfaces/game/player.interface';
import { OptionsColors } from '../../../../../src/app/core/types/optionsColors.type';
import {
    setPlayeres,
    updateBoard,
    boardGameActions,
    setCurrentPlayer,
    setWinner,
    resetState,
    boardGameInitialState,
} from '../../../../../src/app/core/state/board-game';

describe('boardGameActions', () => {
    it('should create an action to set players', () => {
        const mockPlayers: IPlayer[] = [
            { id: 1, name: 'Player 1', color: 'red', isCurrentPlayer: true },
            { id: 2, name: 'Player 2', color: 'blue', isCurrentPlayer: false },
        ];

        const mockExpectedAction = {
            type: boardGameActions.SET_PLAYERES,
            payload: mockPlayers,
        };

        expect(setPlayeres(mockPlayers)).toEqual(mockExpectedAction);
    });

    it('should create an action to set the current player', () => {
        const mockPlayerColor: OptionsColors = 'red';

        const expectedAction = {
            type: boardGameActions.SET_CURRENT_PLAYER,
            payload: mockPlayerColor,
        };

        expect(setCurrentPlayer(mockPlayerColor)).toEqual(expectedAction);
    });

    it('should create an action to set the winner', () => {
        const mockWinner: string = 'Player 1';
        const mockExpectedAction = {
            type: boardGameActions.SET_WINNER,
            payload: mockWinner,
        };

        expect(setWinner(mockWinner)).toEqual(mockExpectedAction);
    });

    it('should create an action to update the board', () => {
        const mockBoard: OptionsColors[][] = [
            ['red', 'blue'],
            ['red', 'blue'],
            ['blue', 'red'],
        ];
        const mockExpectedAction = {
            type: boardGameActions.UPDATE_BOARD,
            payload: mockBoard,
        };

        expect(updateBoard(mockBoard)).toEqual(mockExpectedAction);
    });

    it('should create an action to reset the state', () => {
        const mockExpectedAction = {
            type: boardGameActions.RESET_STATE,
            payload: boardGameInitialState,
        };

        expect(resetState()).toEqual(mockExpectedAction);
    });
});
