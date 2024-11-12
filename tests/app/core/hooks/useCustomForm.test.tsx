import { useCustomForm } from '@core/hooks';
import { RenderHookResult, renderHook, render } from '@testing-library/react';
import { vi, describe, test, expect, beforeEach } from 'vitest';
import { AppContext } from '../../../../src/app/core/state/AppContext';
import { LayoutBoard } from '../../../../src/app/ui/layouts/LayoutBoard/LayoutBoard';
import { initialState } from '../../../../src/app/core/state/reducer';
import { ICustomFormProps } from '../../../../src/app/core/interfaces/game/customFormProps.interface';
import { Form } from '../../../../src/app/ui/components/Form/index';

const renderHookWithContext = (children: React.ReactNode) => {
    return render(
        <AppContext.Provider value={{ state: initialState, dispatch: vi.fn() }}>
            <LayoutBoard>{children}</LayoutBoard>
        </AppContext.Provider>
    );
};

vi.mock('react-router-dom', () => {
    return {
        useNavigate: vi.fn(),
    };
});

let useCustomFormCall: RenderHookResult<ICustomFormProps, unknown>;

describe('useCustomForm hook', () => {
    beforeEach(() => {
        useCustomFormCall = renderHook(() => useCustomForm());
    });

    test('should return correct select options', () => {
        const { result } = useCustomFormCall;

        expect(result.current.selectOptions).toEqual([
            { value: '', label: 'Selecciona un color' },
            { value: 'red', label: 'Rojo' },
            { value: 'blue', label: 'Azul' },
        ]);
    });

    test('should ', () => {
        const { result } = useCustomFormCall;
        renderHookWithContext(<Form onSubmit={vi.fn()} />);
        console.log({ result: result.current });
    });
});
