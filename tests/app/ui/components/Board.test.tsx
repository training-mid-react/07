import { Board } from '../../../../src/app/ui/components/Board';
import { describe, expect, test, vi } from 'vitest';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

describe('Board', () => {
    const mockFallingCells: string[] = ['0-0', '1-1', '3-4'];
    const mockBoard = [
        ['red', 'blue', 'red', 'blue', 'red', 'blue'],
        ['blue', 'red', 'blue', 'red', 'blue', 'red'],
        ['red', 'blue', 'red', 'blue', 'red', 'blue'],
        ['blue', 'red', 'blue', 'red', 'blue', 'red'],
        ['red', 'blue', 'red', 'blue', 'red', 'blue'],
        ['blue', 'red', 'blue', 'red', 'blue', 'red'],
    ];
    const mockHandleClick = vi.fn();

    test('Match snapshoot', () => {
        const { asFragment } = render(
            <Board
                board={mockBoard}
                handleClick={mockHandleClick}
                fallingCells={mockFallingCells}
            />
        );
        expect(asFragment()).toMatchSnapshot();
    });

    test('should render the board with the correct number of columns and squares', () => {
        const { container } = render(
            <Board
                board={mockBoard}
                handleClick={mockHandleClick}
                fallingCells={mockFallingCells}
            />
        );

        const columns = container.querySelectorAll('.board__column');
        expect(columns).toHaveLength(mockBoard[0].length); // que sean 7

        columns.forEach((column) => {
            const squares = column.querySelectorAll('.board__square');
            expect(squares).toHaveLength(mockBoard.length); // que sean 6
        });
    });

    test('should call handleClick when first square is clicked', () => {
        const { container } = render(
            <Board
                board={mockBoard}
                handleClick={mockHandleClick}
                fallingCells={mockFallingCells}
            />
        );

        const square = container.querySelectorAll('.board__square__content')[0]; // Primer cuadrado
        fireEvent.click(square);

        expect(mockHandleClick).toHaveBeenCalledTimes(1);
        expect(mockHandleClick).toHaveBeenCalledWith(0); // La primera columna tiene el índice 0
    });
});
