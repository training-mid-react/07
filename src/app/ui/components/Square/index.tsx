import { SquareProps } from '@core/types';
import React from 'react';
import './styles.scss';

export const Square: React.FC<SquareProps> = ({
    value,
    isFalling,
    onClick,
}) => {
    let isFallingClass = isFalling ? 'falling' : '';
    return (
        <div className="board__square">
            <div
                className={`board__square__content ${isFallingClass}`}
                style={{ backgroundColor: value ?? '' }}
                onClick={onClick}
            ></div>
        </div>
    );
};
