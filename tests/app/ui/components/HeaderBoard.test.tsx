import { render, screen } from '@testing-library/react';
import React from 'react';
import { vi } from 'vitest';
import { HeaderBoard } from '../../../../src/app/ui/components/HeaderBoard/index';
import '@testing-library/jest-dom';

describe('HeaderBoard', () => {
    const mockOnSubmit = vi.fn();
    const mockOnClickResetButton = vi.fn();
    const mockState = {
        state: {
            players: [
                {
                    id: 1,
                    name: 'Jugador 1',
                    color: 'red',
                    isCurrentPlayer: true,
                },
                {
                    id: 2,
                    name: 'Jugador 2',
                    color: 'blue',
                    isCurrentPlayer: false,
                },
            ],
            winner: '',
            board: [[]],
        },
        dispatch: vi.fn(),
    };

    test('should render the header', () => {
        render(
            <HeaderBoard
                state={mockOnSubmit}
                onClickResetButton={mockOnClickResetButton}
            />
        );
    });

    test('should render players correctly', () => {
        render(
            <HeaderBoard
                state={mockState.state}
                onClickResetButton={mockOnClickResetButton}
            />
        );

        screen.getByText(/Jugadores:/i);
        const player1 = screen.getByText(/^Jugador 1$/i);
        const player2 = screen.getByText(/Jugador 2/i);
        expect(player1).toBeInTheDocument();
        expect(player2).toBeInTheDocument();

        expect(player1).toHaveStyle('color: rgb(255, 0, 0)');
        expect(player2).toHaveStyle('color: rgb(0, 0, 255)');
    });
});
