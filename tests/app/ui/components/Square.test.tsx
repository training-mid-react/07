import { fireEvent, render, screen } from '@testing-library/react';
import { Square } from '../../../../src/app/ui/components/Square/index';
import { vi } from 'vitest';
import React from 'react';
// agruegue esto y me dejo de dar error
import '@testing-library/jest-dom';

describe('Square', () => {
    const mockOnClick = vi.fn();
    const value: 'red' | 'blue' | null = null;
    const isFalling: boolean = false;

    test('Match snapshoot', () => {
        const { asFragment } = render(
            <Square onClick={mockOnClick} value={value} isFalling={isFalling} />
        );
        expect(asFragment()).toMatchSnapshot();
    });

    test('Should render with value "red"', () => {
        const { container } = render(
            <Square onClick={mockOnClick} value="red" isFalling={isFalling} />
        );

        const square = container.firstChild;
        const squareContent = square?.firstChild;
        expect(square).toHaveClass('board__square');
        expect(squareContent).toBeInTheDocument();
        expect(squareContent).toHaveClass('board__square__content');
        expect(squareContent).toHaveStyle('background-color:  rgb(255, 0, 0)');
    });

    test('Should render with value "blue"', () => {
        const { container } = render(
            <Square onClick={mockOnClick} value="blue" isFalling={isFalling} />
        );

        const square = container.firstChild;
        const squareContent = square?.firstChild;
        expect(squareContent).toHaveStyle('background-color:  rgb(0, 0, 255)');
    });

    test('Should call onClick when clicked on square', () => {
        const { container } = render(
            <Square onClick={mockOnClick} value={value} isFalling={isFalling} />
        );

        const square = container.firstChild as Element;
        const squareContent = square?.firstChild as Element;

        fireEvent.click(squareContent);
        expect(mockOnClick).toHaveBeenCalled();
    });

    test('Should call onClick multiple times on multiple clicks', () => {
        const { container } = render(
            <Square onClick={mockOnClick} value={value} isFalling={isFalling} />
        );

        const squareContent = container.firstChild?.firstChild as HTMLElement;

        fireEvent.click(squareContent);
        fireEvent.click(squareContent);
        fireEvent.click(squareContent);

        expect(mockOnClick).toHaveBeenCalled();
    });

    test('renders the class falling when isFalling is true', () => {
        const { container } = render(
            <Square value="blue" onClick={mockOnClick} isFalling={!isFalling} />
        );

        const square = container.firstChild as Element;
        const squareContent = square?.firstChild as Element;

        fireEvent.click(squareContent);
        expect(mockOnClick).toHaveBeenCalled();
        expect(squareContent).toHaveClass('falling');
    });

    test('does not apply falling class when isFalling is false', () => {
        const { container } = render(
            <Square value="blue" isFalling={isFalling} onClick={mockOnClick} />
        );

        const square = container.firstChild as Element;
        const squareContent = square?.firstChild as Element;

        expect(squareContent).toHaveClass('board__square__content');
        expect(squareContent).not.toHaveClass('falling');
    });
});
