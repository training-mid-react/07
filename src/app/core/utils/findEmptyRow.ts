import { ROWS } from "../constants/constants";
import { CELL } from "../interfaces/game.interface";

export const findEmptyRow = (col: number, grid: CELL[][]): number => {
    for (let row = ROWS - 1; row >= 0; row--) {
        if (!grid[row][col]) return row;
    }
    return -1;
};