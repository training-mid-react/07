export interface GameState {
    tablero: number[][];
    tableroRow: number;
    tableroColumn: number;
    tableroCell: number;
    isPlayerOneTurn: boolean;
    isThereWinner: boolean;
    winnerPlayer: number;
}