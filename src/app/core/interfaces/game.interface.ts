import { IPlayer } from './player.interface';

export type CELL = IPlayer | null;

export interface IGameState {
    grid: CELL[][];
    playerActive: IPlayer;
    winner: IPlayer | null;
    isDraw: boolean;
}