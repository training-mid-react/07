import { COLS, ROWS, WINNING_LENGTH } from "../constants/constants";
import { CELL } from "../interfaces/game.interface";
import { IPlayer } from "../interfaces/player.interface";

export const isWinner = (row: number, col: number, player: IPlayer, grid: CELL[][]): boolean => {
    // Direcciones: horizontal, vertical, diagonal descendente, diagonal ascendente
    const directions = [
        [[0, 1], [0, -1]], // horizontal
        [[1, 0], [-1, 0]], // vertical
        [[1, 1], [-1, -1]], // diagonal \
        [[1, -1], [-1, 1]]  // diagonal /
    ];

    return directions.some(dirPair => {
        let count = 1;
        dirPair.forEach(([dx, dy]) => {
            let x = row + dx;
            let y = col + dy;
            while (
                x >= 0 && x < ROWS &&
                y >= 0 && y < COLS &&
                grid[x][y] === player
            ) {
                count++;
                x += dx;
                y += dy;
            }
        });
        return count >= WINNING_LENGTH;
    });
};