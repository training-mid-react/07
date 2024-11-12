import { useBoardContainer } from '@core/hooks';
import { Game } from '@ui/components/Game';
import { LayoutBoard } from '@ui/layouts/LayoutBoard/LayoutBoard';

export const BoardContainer = () => {
    const props = useBoardContainer();
    return (
        <LayoutBoard>
            <Game {...props} />
        </LayoutBoard>
    );
};
