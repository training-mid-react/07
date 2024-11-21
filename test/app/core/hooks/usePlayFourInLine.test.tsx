import React, { act, useReducer } from 'react';
import { renderHook } from '@testing-library/react';

import { reducer } from '../../../../src/app/core/state/reducer';
import { AppContext } from '../../../../src/app/core/state/AppContext';
import { usePlayFourInLine } from '../../../../src/app/core/hooks/usePlayFourInLine';
import { boardInitialState } from '../../../../src/app/core/state/board-game';

// Initial State
const initialStateMock = { ...boardInitialState };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getContextMock = ({ stateMock, dispatch }: { stateMock: any, dispatch?: any }) =>{
  return ({ children }: { children: React.ReactNode }) => (

    <AppContext.Provider value={{ state: stateMock, dispatch }}>
      {children}
    </AppContext.Provider>
  );

};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const  getContextWithReducerMock = ({ stateMock }: { stateMock: any}) =>{

  return({children}) => {
    const [state, dispatch] = useReducer(reducer, stateMock);
    return (
      <AppContext.Provider value={{ state, dispatch }}>
        {children}
      </AppContext.Provider>
    );

  };
};

describe('Testing @hooks/usePlayFourInLine', () => {

  const firstPlayer = 'player1';
  const secondPlayer = 'player2';
  const initialPlayer = firstPlayer;	

  test('Verificar que el estado inicial del tablero es correcto', () => {
    const wrapperMock = getContextMock({ stateMock: initialStateMock });
    const { result } = renderHook(() => usePlayFourInLine(), { wrapper: wrapperMock });

    expect(result.current.board).toEqual(initialStateMock.board);
    expect(result.current.currentPlayer).toEqual('player1');
    expect(result.current.winner).toEqual(null);
  });

  test('Verificar que el estado del tablero se actualiza correctamente al hacer click en una celda', () => {
    const wrapperMock = getContextWithReducerMock({ stateMock: initialStateMock });
    const { result } = renderHook(() => usePlayFourInLine(), { wrapper: wrapperMock });

    act(() => {
      result.current.handleColumnClick(0);
    });

    expect(result.current.board[5][0]).toEqual('player1');
  });

  test('Verificar que se cambia el turno', () => { 
    const wrapperMock = getContextWithReducerMock({ stateMock: initialStateMock });
    const { result } = renderHook(() => usePlayFourInLine(), { wrapper: wrapperMock });

    act(() => {
      result.current.handleColumnClick(0);
    });

    expect(result.current.currentPlayer).not.toEqual(initialPlayer);
    expect(result.current.currentPlayer).toBe(secondPlayer);
  });

  test('Verificar que se se cumple 4 en raya, gana', () => {
    const wrapperMock = getContextWithReducerMock({ stateMock: initialStateMock });
    const { result } = renderHook(() => usePlayFourInLine(), { wrapper: wrapperMock });

    act(() => result.current.handleColumnClick(0)); // player1
    act(() => result.current.handleColumnClick(1)); 
    act(() => result.current.handleColumnClick(0)); // player1
    act(() => result.current.handleColumnClick(1)); 
    act(() => result.current.handleColumnClick(0)); // player1
    act(() => result.current.handleColumnClick(1)); 
    act(() => result.current.handleColumnClick(0)); // player1
    act(() => result.current.handleColumnClick(1)); 

    expect(result.current.winner).not.toBe(secondPlayer);
    expect(result.current.winner).not.toBeFalsy();
    expect(result.current.winner).toBe(firstPlayer);
  });

  test('Verificar que cuando es un empate, el estado del tablero no cambia', () => { 
    const initialStateMock = { 
      ...boardInitialState,
      winner: 'draw' 
    };
    const wrapperMock = getContextWithReducerMock({ stateMock: initialStateMock });
    const { result } = renderHook(() => usePlayFourInLine(), { wrapper: wrapperMock });

    act(() => result.current.handleColumnClick(0));

    expect(result.current.winner).not.toBeFalsy();
    expect(result.current.winner).not.toBe(firstPlayer);
    expect(result.current.winner).not.toBe(secondPlayer);
    expect(result.current.winner).toBe('draw');
  });

  test('Verificar que cuando se termina el juego, el tablero se restablece', () => { 
    const initialStateMock = { 
      ...boardInitialState,
    };
    const wrapperMock = getContextWithReducerMock({ stateMock: initialStateMock });
    const { result } = renderHook(() => usePlayFourInLine(), { wrapper: wrapperMock });

    act(() => result.current.handleColumnClick(0));
    act(() => result.current.handleColumnClick(1));
    act(() => result.current.handleColumnClick(0));            
    act(() => result.current.handleColumnClick(1));
    act(() => result.current.handleColumnClick(0));            
    
    expect(result.current.board).not.toEqual(boardInitialState.board);  
    
    act(() => result.current.handleResetGame());
    expect(result.current.board).toEqual(boardInitialState.board);
  });
});