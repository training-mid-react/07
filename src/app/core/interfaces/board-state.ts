
export const ROWS = 6;
export const COLUMNS = 7;
export const WINNING_LENGTH = 4;

export interface IBoardGameState {
    board: BoardMatrix;
    currentPlayer:  Exclude<Player, 'draw'>;
    winner: Player;
}

export type BoardMatrix = Cell[][];
export type Cell =  Exclude<Player, 'draw'>;
export type Player = null | 'player1' | 'player2' | 'draw'
