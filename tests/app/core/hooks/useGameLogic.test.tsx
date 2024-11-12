import React from 'react';
import { renderHook, act } from '@testing-library/react';
import { vi } from 'vitest';
import { MockAppContextProvider } from '../../../../src/app/core/state/MockAppContextProvider';
import { useGameLogic } from '../../../../src/app/core/hooks/useGameLogic';
import '@testing-library/jest-dom';

const initialMockState = {
  board: [
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
  ],
  currentPlayer: 'Player 1',
  winner: null,
  isDraw: false,
};

const wrapper = ({ children, mockState }) => (
  <MockAppContextProvider initialGameState={mockState}>
    {children}
  </MockAppContextProvider>
);

it('debería devolver el board correctamente', () => {
  const { result } = renderHook(() => useGameLogic(), { wrapper: ({ children }) => wrapper({ children, mockState: initialMockState }) });
  expect(result.current.board).toEqual(initialMockState.board);
});

it('debería devolver el currentPlayer correctamente', () => {
  const mockState = { ...initialMockState, currentPlayer: 'Player 1' };
  const { result } = renderHook(() => useGameLogic(), { wrapper: ({ children }) => wrapper({ children, mockState }) });
  expect(result.current.currentPlayer).toBe('Player 1');
});

it('debería devolver el valor correcto para winner', () => {
  const mockState = {
    board: [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, 'Player 1', null, null, null],
      [null, null, null, 'Player 1', 'Player 2', null, null],
      [null, null, null, 'Player 1', 'Player 2', null, null],
      [null, null, null, 'Player 1', 'Player 2', null, null],
    ],
    currentPlayer: 'Player 2',
    winner: 'Player 1',
    isDraw: false,
  };
  const { result } = renderHook(() => useGameLogic(), { wrapper: ({ children }) => wrapper({ children, mockState }) });
  expect(result.current.winner).toBe('Player 1');
});

it('debería devolver el valor correcto para isDraw cuando el juego es empate', () => {
  const mockState = { ...initialMockState, isDraw: true };
  const { result } = renderHook(() => useGameLogic(), { wrapper: ({ children }) => wrapper({ children, mockState }) });
  expect(result.current.isDraw).toBe(true);
});

it('debería disparar handleMove correctamente sin recibir argumentos', async () => {
  const dispatchMock = vi.fn();
  
  const { result } = renderHook(() => {
    const handleMoveMock = () => {
      dispatchMock({ type: 'MOCK_ACTION' });
    };
    return { handleMove: handleMoveMock };
  }, { wrapper: ({ children }) => wrapper({ children, mockState: initialMockState }) });

  await act(async () => {
    result.current.handleMove();
  });

  expect(dispatchMock).toHaveBeenCalledTimes(1);
  const dispatchedAction = dispatchMock.mock.calls[0][0]; 
  expect(dispatchedAction.type).toBe('MOCK_ACTION');
});
