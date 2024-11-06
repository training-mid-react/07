import { AppContext } from '@core/state/AppContext';
import { Game } from '@ui/components/Game';
import { LayoutBoard } from '@ui/layouts/LayoutBoard/LayoutBoard';
import { useContext } from 'react';

export const BoardContainer = () => {
    const { state } = useContext(AppContext);

    return (
        <LayoutBoard>
            <Game state={state} />
        </LayoutBoard>
    );
};
