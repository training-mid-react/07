import { render, screen, fireEvent } from '@testing-library/react';
import { ResetButton } from '../../../../src/app/ui/components/ResetButton/index';
import React from 'react';
import { vi } from 'vitest';

describe('Button', () => {
    const mockOnClickResetButton = vi.fn();

    test('should render', () => {
        render(<ResetButton onClickResetButton={mockOnClickResetButton} />);
    });

    test('should label in button', () => {
        render(<ResetButton onClickResetButton={mockOnClickResetButton} />);

        const button = screen.getByText(/Reiniciar juego/i);
        expect(button).toBeInTheDocument();
    });

    test('should click correctly', () => {
        render(<ResetButton onClickResetButton={mockOnClickResetButton} />);

        const button = screen.getByText(/Reiniciar juego/i);
        fireEvent.click(button);

        expect(mockOnClickResetButton).toHaveBeenCalled();
    });
});
