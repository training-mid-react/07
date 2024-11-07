import { FC } from 'react';
import './styles.scss';
import { Square } from '../Square';
import { ROWS } from '@core/constants';
import { OptionsColors } from '@core/types';

interface Props {
    board: OptionsColors[][];
    handleClick: (col: number) => void;
    fallingCells: string[];
}
export const Board: FC<Props> = ({ board, handleClick, fallingCells }) => (
    <div className="board">
        {board?.map((_, col) => (
            <div key={col} className="board__column">
                {Array.from({ length: ROWS }, (_, row) => (
                    <Square
                        key={`${row}-${col}`}
                        onClick={() => handleClick(col)}
                        value={board[row][col]}
                        isFalling={fallingCells.includes(`${row}-${col}`)}
                    />
                ))}
            </div>
        ))}
    </div>
);
