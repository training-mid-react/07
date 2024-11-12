import { vi, describe, test, expect } from 'vitest';
import { IState } from '../../../../src/app/core/interfaces/state.interface';
import { render, fireEvent, screen } from '@testing-library/react';
import { AppContext } from '../../../../src/app/core/state/AppContext';
import React from 'react';
import { useBoardContainer } from '../../../../src/app/core/hooks/board-container/useBoardContainer';
import { Game } from '../../../../src/app/ui/components/Game/index';
import '@testing-library/jest-dom';

vi.mock('react-router-dom', () => ({
    useNavigate: vi.fn().mockImplementation(() => vi.fn()),
}));

const initialState: IState = {
    winner: '',
    board: Array(6).fill(Array(7).fill(null)),
    players: [
        { id: 1, name: 'Jugador 1', color: 'blue', isCurrentPlayer: true },
        { id: 2, name: 'Jugador 2', color: 'red', isCurrentPlayer: false },
    ],
};
const mockDispatch = vi.fn(() => {
    return {
        navigate: vi.fn(),
    };
});

describe('useBoardContainer hook', () => {
    const renderWithContext = ({ children }: { children: React.ReactNode }) => {
        return render(
            <AppContext.Provider
                value={{ state: initialState, dispatch: mockDispatch }}
            >
                {children}
            </AppContext.Provider>
        );
    };

    const TestComponent = () => {
        const props = useBoardContainer();

        return <Game {...props} />;
    };

    test('Match snapshoot', () => {
        const { asFragment } = renderWithContext({
            children: <TestComponent />,
        });

        expect(asFragment()).toMatchSnapshot();
    });

    test('should return initial state and functions', async () => {
        renderWithContext({ children: <TestComponent /> });

        expect(mockDispatch).not.toHaveBeenCalled();
    });

    test('should reset the state when onClickResetButton is called', async () => {
        renderWithContext({ children: <TestComponent /> });
        const restartButton = screen.getByText('Reiniciar juego');
        fireEvent.click(restartButton);

        expect(mockDispatch).toHaveBeenCalled();
    });
});
