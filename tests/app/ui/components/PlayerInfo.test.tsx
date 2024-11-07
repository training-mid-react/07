import React from 'react';
import { render } from '@testing-library/react';
import PlayerInfo from '../../../../src/app/ui/components/PlayerInfo';

describe('Componente PlayerInfo', () => {
  it('renderiza correctamente', () => {
    const { asFragment } = render(<PlayerInfo />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renderiza el contenedor principal con el data-testid correcto', () => {
    const { getByTestId } = render(<PlayerInfo />);
    const playerInfoElement = getByTestId('player-info');
    expect(playerInfoElement).toBeInTheDocument();
  });

  it('renderiza el ítem de cada jugador con el data-testid correcto', () => {
    const { getByTestId } = render(<PlayerInfo />);
    const player1Item = getByTestId('player-info_item-cell-1');
    const player2Item = getByTestId('player-info_item-cell-2');
    expect(player1Item).toBeInTheDocument();
    expect(player2Item).toBeInTheDocument();
  });

  it('renderiza los nombres de los jugadores correctamente', () => {
    const { getByText } = render(<PlayerInfo />);
    expect(getByText('Player 1')).toBeInTheDocument();
    expect(getByText('Player 2')).toBeInTheDocument();
  });

  it('asigna las clases correctas a las celdas de los jugadores', () => {
    const { container } = render(<PlayerInfo />);
    const player1Cell = container.querySelector('.cell-1');
    const player2Cell = container.querySelector('.cell-2');
    expect(player1Cell).toBeInTheDocument();
    expect(player2Cell).toBeInTheDocument();
  });

  it('renderiza el componente Title correctamente', () => {
    const { getByTestId } = render(<PlayerInfo />);
    const titlePlayer1 = getByTestId('player-info_item-cell-1').querySelector('h4');
    const titlePlayer2 = getByTestId('player-info_item-cell-2').querySelector('h4');
    expect(titlePlayer1).toBeInTheDocument();
    expect(titlePlayer2).toBeInTheDocument();
  });

  it('renderiza las celdas de los jugadores con el data-testid correcto', () => {
    const { getByTestId } = render(<PlayerInfo />);
    const player1Cell = getByTestId('player-cell-Player 1');
    const player2Cell = getByTestId('player-cell-Player 2');
    expect(player1Cell).toBeInTheDocument();
    expect(player2Cell).toBeInTheDocument();
  });
});
