import './styles.scss';
import { LayoutBoardProps } from '@core/interfaces';

export const LayoutBoard = ({ children }: LayoutBoardProps) => {
    return <div className="board-layout">{children}</div>;
};
