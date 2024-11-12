import { render, renderHook } from '@testing-library/react';
import { vi, describe, test, expect } from 'vitest';
import React from 'react';
import {
    AppContext,
    useAppContext,
} from '../../../../src/app/core/state/AppContext';
import '@testing-library/jest-dom';
import { initialState } from '../../../../src/app/core/state/reducer';
import { Home } from '../../../../src/app/ui/components/Home/index';
import { useHomeContainer } from '../../../../src/app/core/hooks/home-container/useHomeContainer';

const renderHookWithContext = ({ ...renderOptions }) => {
    const mockOnSubmit = vi.fn();
    return render(
        <AppContext.Provider value={{ state: initialState, dispatch: vi.fn() }}>
            <Home onSubmit={mockOnSubmit} />,
        </AppContext.Provider>,
        renderOptions
    );
};

vi.mock('react-router-dom', () => {
    return {
        useNavigate: vi.fn(),
    };
});

describe('useHomeContainer hook', () => {
    test('hooks respond correctly', () => {
        const { asFragment } = renderHookWithContext({});

        expect(asFragment()).toMatchSnapshot();
    });

    test('should call dispatch with correct players when form is submitted', async () => {
        const { container, debug } = renderHookWithContext({});
        // console.log({ container });
    });
    // test('should call dispatch with correct players when form is submitted', async () => {
    //     renderHookWithContext();

    //     const { result } = renderHook(() => useHomeContainer());
    //     const { onSubmit } = result.current;
    //     console.log({ onSubmit });
    //     // screen.debug();

    //     const inputs = screen.getAllByText('Nombre:');
    //     const selects = screen.getAllByText('Color:');
    //     await waitFor(() => {
    //         inputs.forEach((input, i) => {
    //             expect(input).toBeInTheDocument();
    //             fireEvent.change(input), { target: { value: `Player ${i}` } };
    //         });
    //         selects.forEach((select, i) => {
    //             expect(select).toBeInTheDocument();
    //             fireEvent.change(select),
    //                 { target: { value: `${i === 0 ? 'blue' : 'red'}` } };
    //         });
    //         fireEvent.click(screen.getByText('Iniciar Juego'));
    //     });
    //     await waitFor(() => {
    //         expect(onSubmit).toHaveBeenCalled();
    //         expect(dispatch).toHaveBeenCalledWith({
    //             type: 'SET_PLAYERS',
    //             payload: [
    //                 {
    //                     name: 'Player 1',
    //                     color: 'red',
    //                     id: 1,
    //                     isCurrentPlayer: true,
    //                 },
    //                 {
    //                     name: 'Player 2',
    //                     color: 'blue',
    //                     id: 2,
    //                     isCurrentPlayer: false,
    //                 },
    //             ],
    //         });
    //     });
    // });

    //     test('should navigate to /board-game when form is submitted', async () => {
    //         render(
    //             <MemoryRouter>
    //                 <AppContext.Provider
    //                     value={{ state: { players: [] }, dispatch }}
    //                 >
    //                     <HomeContainerWithContext />
    //                 </AppContext.Provider>
    //             </MemoryRouter>
    //         );

    //         fireEvent.change(screen.getByPlaceholderText('Player 1 Name'), {
    //             target: { value: 'Player 1' },
    //         });
    //         fireEvent.change(screen.getByPlaceholderText('Player 1 Color'), {
    //             target: { value: 'red' },
    //         });
    //         fireEvent.change(screen.getByPlaceholderText('Player 2 Name'), {
    //             target: { value: 'Player 2' },
    //         });
    //         fireEvent.change(screen.getByPlaceholderText('Player 2 Color'), {
    //             target: { value: 'blue' },
    //         });

    //         fireEvent.click(screen.getByText('Start Game'));

    //         await waitFor(() => {
    //             expect(navigate).toHaveBeenCalledWith('/board-game');
    //         });
    //     });
    // });
});
