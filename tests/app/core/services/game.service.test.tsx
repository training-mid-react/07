import { describe, it, expect } from 'vitest';
import { placePiece } from '../../../../src/app/core/services/game.service';
import { Cell, Player } from '../../../../src/app/core/interfaces/boardState';
import { IMoveResult } from '../../../../src/app/core/interfaces/moveResult';

describe('placePiece', () => {
  const emptyBoard: Cell[][] = [
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
  ];

  it('deberia colocar una pieza en la fila y columna correcta', () => {
    const currentPlayer: Player = 'Player 1';
    const column = 3;
    
    const result: IMoveResult = placePiece(emptyBoard, column, currentPlayer);

    expect(result.newBoard[5][column]).toBe(currentPlayer); 
    expect(result.nextPlayer).toBe('Player 2');
  });

  it('debe devolver el ganador correcto si un jugador gana', () => {
    const currentPlayer: Player = 'Player 1';
    const column = 3;
    
    const boardWithWinningMove: Cell[][] = [
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, 'Player 1', null, null, null],
        [null, null, null, 'Player 1', 'Player 2', null, null],
        [null, null, null, 'Player 1', 'Player 2', null, null],
        [null, null, null, 'Player 1', 'Player 2', null, null],
    ];
  
    const result: IMoveResult = placePiece(boardWithWinningMove, column, currentPlayer);
  
    expect(result.winner).toBe('Player 1');
  });  

  it('Debería devolver el ganador nulo si nadie gana todavía', () => {
    const currentPlayer: Player = 'Player 2';
    const column = 3;
    const boardWithoutWinner: Cell[][] = [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, 'Player 1', 'Player 2', null, null],
    ];

    const result: IMoveResult = placePiece(boardWithoutWinner, column, currentPlayer);

    expect(result.winner).toBeNull();
  });

});
