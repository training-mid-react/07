import { IState } from '@core/interfaces';

export interface IBoardContainerProps {
    state: IState;
    onClickResetButton: () => void;
    fallingCells: string[];
    handleClick: (col: number) => void;
}
