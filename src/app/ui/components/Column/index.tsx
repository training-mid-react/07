import React from 'react';
import './style.scss'

interface ColumnProps {
    columnIndex: number;
    dropPiece: (column: number) => void;
    columnData: number[];
}

function Column({ columnIndex, dropPiece, columnData }: ColumnProps) {
    return (
        <div className="column" onClick={() => dropPiece(columnIndex)}>
            {columnData.reverse().map((cell, rowIndex) => (
                <div
                    key={rowIndex}
                    className={`cell ${cell === 1 ? 'player1' : cell === 2 ? 'player2' : ''}`}
                />
            ))}
        </div>
    );
};

export default Column;
