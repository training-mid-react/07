import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Form } from '../../../../src/app/ui/components/Form';
import { describe, expect, test, vi } from 'vitest';
import React from 'react';
import '@testing-library/jest-dom';

vi.mock('@core/hooks', () => ({
    useform: () => ({
        selectOptions: [
            { label: 'Rojo', value: 'red' },
            { label: 'Azul', value: 'blue' },
        ],
        register: vi.fn(),
        handleSubmit: (callback: any) => callback,
        errors: {},
        setValue: vi.fn(),
        getValues: () => ({
            player1: { name: 'Player 1', color: 'blue' },
            player2: { name: 'Player 2', color: 'rojo' },
        }),
    }),
}));

describe('Form', () => {
    const mockOnSubmit = vi.fn((data) => {
        Promise.resolve();
    });

    test('Match snapshoot', () => {
        const { asFragment } = render(<Form onSubmit={mockOnSubmit} />);
        expect(asFragment()).toMatchSnapshot();
    });

    test('you should render the form correctly', () => {
        render(<Form onSubmit={mockOnSubmit} />);

        const title = screen.getByText('Configuración de Jugadores');
        expect(title).toBeInTheDocument();

        const inputs = screen.getAllByPlaceholderText('Ingresa un nombre');

        inputs.forEach((input) => {
            expect(input).toBeInTheDocument();
        });
        const player1 = screen.getByText('Jugador 1');
        const player2 = screen.getByText('Jugador 2');

        expect(player1).toBeInTheDocument();
        expect(player2).toBeInTheDocument();

        const names = screen.getAllByLabelText(/Nombre/);
        names.forEach((name) => {
            expect(name).toBeInTheDocument();
        });

        const labels = screen.getAllByLabelText(/Color/);
        labels.forEach((label) => {
            expect(label).toBeInTheDocument();
        });

        expect(screen.getByText('Iniciar Juego')).toBeInTheDocument();
    });

    test('function is not called if data is not completed', async () => {
        const { getByRole } = render(<Form onSubmit={mockOnSubmit} />);
        const button = getByRole('button', { name: /Iniciar Juego/i });
        await waitFor(() => fireEvent.click(button));

        const alert = await screen.findAllByText('Nombre es requerido');
        alert.forEach((a) => expect(a).toBeInTheDocument());

        expect(mockOnSubmit).not.toHaveBeenCalled();
    });

    test('function is not called if data is wrong', async () => {
        const { container, getAllByLabelText } = render(
            <Form onSubmit={mockOnSubmit} />
        );

        const selectColor = getAllByLabelText('Color:');

        for (const [_, select] of selectColor.entries())
            await waitFor(() => {
                fireEvent.change(select, {
                    target: { value: 'blue' },
                });
                fireEvent.blur(select);
            });

        expect(container.innerHTML).toMatch(
            'Los jugadores no pueden compartir el mismo color'
        );
    });

    test('function is called if data is completed', async () => {
        render(<Form onSubmit={mockOnSubmit} />);

        const { getAllByLabelText, getByRole } = screen;

        const inputsName = getAllByLabelText('Nombre:');
        const selectColor = getAllByLabelText('Color:');
        for (const [index, input] of inputsName.entries()) {
            await waitFor(() =>
                fireEvent.change(input, {
                    target: { value: `Player ${index + 1}` },
                })
            );
        }
        for (const [index, select] of selectColor.entries()) {
            await waitFor(() =>
                fireEvent.change(select, {
                    target: { value: `${index === 0 ? 'blue' : 'red'}` },
                })
            );
        }

        const submitButton = getByRole('button', { name: /Iniciar Juego/i });
        await waitFor(() => fireEvent.click(submitButton));

        expect(mockOnSubmit).toHaveBeenCalledWith(
            {
                player1: { name: 'Player 1', color: 'blue' },
                player2: { name: 'Player 2', color: 'red' },
            },
            expect.objectContaining({
                type: 'submit',
            })
        );
    });
});
