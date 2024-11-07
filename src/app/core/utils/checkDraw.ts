import { CELL } from "../interfaces/game.interface";

export const checkIsDraw = (grid: CELL[][]): boolean => {
    return grid[0].every(cell => cell !== null);
};