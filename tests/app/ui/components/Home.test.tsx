import { render } from '@testing-library/react';
import React from 'react';
import { describe, expect, test, vi } from 'vitest';
import { Home } from '../../../../src/app/ui/components/Home/index';

describe('Home', () => {
    const mockOnSubmit = vi.fn();

    test('Match snapshoot', () => {
        const { asFragment } = render(<Home onSubmit={mockOnSubmit} />);
        expect(asFragment()).toMatchSnapshot();
    });

    test('Should render', () => {
        render(<Home onSubmit={mockOnSubmit} />);
    });
});
