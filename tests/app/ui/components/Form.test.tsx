import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Form } from '../../../../src/app/ui/components/Form';
import { vi } from 'vitest';
import React from 'react';

vi.mock('@core/hooks', () => ({
    useform: () => ({
        selectOptions: [
            { label: 'Rojo', value: 'red' },
            { label: 'Azul', value: 'blue' },
        ],
        register: jest.fn(),
        handleSubmit: (callback: any) => callback,
        errors: { player1: { name: { message: 'Nombre es requerido' } } },
    }),
}));

describe('Form', () => {
    const mockOnSubmit = vi.fn(() => Promise.resolve());

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

    test('function is not called if data is not completed', () => {
        const { getByRole } = render(<Form onSubmit={mockOnSubmit} />);
        const button = getByRole('button', { name: /Iniciar Juego/i });
        fireEvent.click(button);

        expect(mockOnSubmit).not.toHaveBeenCalled();
    });
});
