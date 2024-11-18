import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Board from '../../../../src/app/ui/components/Board';
import { Cell } from '../../../../src/app/core/interfaces/boardState';
import '@testing-library/jest-dom';

const mockBoard: Cell[][] = [
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, 'Player 2', null, null],
  [null, null, 'Player 1', 'Player 1', 'Player 2', null, null],
  [null, 'Player 2', 'Player 1', 'Player 2', 'Player 1', 'Player 1', null]
];

describe('Componente Board', () => {
  const mockOnMove = vi.fn();
  const mockHandleReset = vi.fn();

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('renderiza correctamente el componente', () => {
    const { asFragment } = render(
      <Board
        board={mockBoard}
        currentPlayer="Player 1"
        disabled={false}
        onMove={mockOnMove}
        handleReset={mockHandleReset}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('renderiza el componente PlayerInfo', () => {
    const { getByTestId } = render(
      <Board
        board={mockBoard}
        currentPlayer="Player 1"
        disabled={false}
        onMove={mockOnMove}
        handleReset={mockHandleReset}
      />
    );
    const playerInfoElement = getByTestId('player-info');
    expect(playerInfoElement).toBeInTheDocument();
  });

  it('llama a la función onMove al hacer clic en una celda cuando disabled es false', () => {
    const { container } = render(
      <Board
        board={mockBoard}
        currentPlayer="Player 1"
        disabled={false}
        onMove={mockOnMove}
        handleReset={mockHandleReset}
      />
    );

    const cell = container.querySelector('.cell:not(.cell-1):not(.cell-2)');
    if (cell) {
      fireEvent.click(cell);
      expect(mockOnMove).toHaveBeenCalledWith(expect.any(Number));
      expect(mockOnMove).toHaveBeenCalledTimes(1);
    }
  });

  it('no llama a onMove al hacer clic en una celda cuando disabled es true', () => {
    const { container } = render(
      <Board
        board={mockBoard}
        currentPlayer="Player 1"
        disabled={true}
        onMove={mockOnMove}
        handleReset={mockHandleReset}
      />
    );

    const cell = container.querySelector('.cell.disabled');
    if (cell) {
      fireEvent.click(cell);
      expect(mockOnMove).not.toHaveBeenCalled();
    }
  });

  it('llama a handleReset al hacer clic en el icono de reinicio', () => {
    const { container } = render(
      <Board
        board={mockBoard}
        currentPlayer="Player 1"
        disabled={false}
        onMove={mockOnMove}
        handleReset={mockHandleReset}
      />
    );

    const resetIcon = container.querySelector('svg');
    if (resetIcon) {
      fireEvent.click(resetIcon);
      expect(mockHandleReset).toHaveBeenCalled();
    }
  });
});
