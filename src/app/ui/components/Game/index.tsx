import { HeaderBoard } from '../HeaderBoard';
import { Board } from '../Board';
import { FC } from 'react';
import { IState } from '@core/interfaces';

export const Game: FC<{ state: IState }> = ({ state }) => (
    <>
        <HeaderBoard state={state} />
        <Board />
    </>
);
