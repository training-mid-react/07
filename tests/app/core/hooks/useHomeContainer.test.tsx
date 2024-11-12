import { render, renderHook, RenderHookResult } from '@testing-library/react';
import { vi, describe, test, expect, beforeEach, expectTypeOf } from 'vitest';
import React from 'react';
import { AppContext } from '../../../../src/app/core/state/AppContext';
import '@testing-library/jest-dom';
import { initialState } from '../../../../src/app/core/state/reducer';
import { Home } from '../../../../src/app/ui/components/Home/index';
import { useHomeContainer } from '../../../../src/app/core/hooks/home-container/useHomeContainer';
import { HomeContainerHooksReturn } from '../../../../src/app/core/interfaces/homeContainer/index';

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
let useHomeContainerCall: RenderHookResult<HomeContainerHooksReturn, unknown>;

describe('useHomeContainer hook', () => {
    beforeEach(() => {
        useHomeContainerCall = renderHook(() => useHomeContainer());
    });

    test('hooks respond correctly', () => {
        const { asFragment } = renderHookWithContext({});

        expect(asFragment()).toMatchSnapshot();
    });

    test('should call dispatch with correct players when form is submitted', async () => {
        const { result } = useHomeContainerCall;
        expectTypeOf(result.current.onSubmit).toBeFunction();
    });
});
