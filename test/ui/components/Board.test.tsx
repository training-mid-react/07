import React, { act } from 'react';
import { vi } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import { Board } from '../../../src/app/ui/components/Board';
import { boardInitialState } from '../../../src/app/core/state/board-game';
import { COLUMNS, ROWS } from '../../../src/app/core/interfaces/board-state';

describe('Board', () => {

  // ===> Initial state
  const initialState = Array.from({ length: ROWS }, () => Array(COLUMNS).fill(null));
  
  test('Matches the snapshot', () => {
    const initialState = boardInitialState.board;
    const handleSelectColumn = vi.fn();
    const component = render(
      <Board 
        board={initialState}
        currentPlayer={'player1'}
        handleSelectColumn={handleSelectColumn}
      />
    );
    expect(component.asFragment()).toMatchSnapshot();
  });

  test('Expect to put a player name in the table', async() => {
   
    const player = 'player1';
    
    const handleSelectColumn = vi.fn();
    render(
      <Board 
        board={initialState}
        currentPlayer={player}
        handleSelectColumn={handleSelectColumn}
      />
    );

    const cell = screen.getByTestId('cell_5_0');
    await act(async() => {
      fireEvent.click(cell);
    });
    
    await waitFor(() => expect(handleSelectColumn).toHaveBeenCalledTimes(1));
  });

});