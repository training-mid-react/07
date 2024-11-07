import { HeaderBoard } from '../HeaderBoard';
import { Board } from '../Board';
import { FC } from 'react';
import { IState } from '@core/interfaces';

export const Game: FC<{
    state: IState;
    onClickResetButton: () => void;
    handleClick: (col: number) => void;
    fallingCells: string[];
}> = ({ state, onClickResetButton, handleClick, fallingCells }) => (
    <>
        <HeaderBoard state={state} onClickResetButton={onClickResetButton} />
        <Board
            handleClick={handleClick}
            fallingCells={fallingCells}
            board={state.board}
        />
    </>
);
