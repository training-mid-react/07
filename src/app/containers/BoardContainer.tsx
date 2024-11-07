import { useBoardContainer } from '@core/hooks';
import { Game } from '@ui/components/Game';
import { LayoutBoard } from '@ui/layouts/LayoutBoard/LayoutBoard';

export const BoardContainer = () => {
    const { state, onClickResetButton, fallingCells, handleClick } =
        useBoardContainer();
    return (
        <LayoutBoard>
            <Game
                state={state}
                onClickResetButton={onClickResetButton}
                fallingCells={fallingCells}
                handleClick={handleClick}
            />
        </LayoutBoard>
    );
};
