import { render, screen } from '@testing-library/react';
import { Game } from '../../../../src/app/ui/components/Game';
import { describe, expect, test, vi } from 'vitest';
import React from 'react';

describe('Game', () => {
    const mockOnClickResetButton = vi.fn();
    const mockOnHandleClick = vi.fn();
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

    test('Match snapshoot', () => {
        const { asFragment } = render(
            <Game
                state={mockState}
                onClickResetButton={mockOnClickResetButton}
                handleClick={mockOnHandleClick}
                fallingCells={[]}
            />
        );

        expect(asFragment()).toMatchSnapshot();
    });
});
