import React from 'react';
import { render } from '@testing-library/react';
import TurnInfo from '../../../../src/app/ui/components/TurnInfo';

describe('Componente TurnInfo', () => {
  const currentPlayer = 'Player 1';

  it('renderiza correctamente', () => {
    const { asFragment } = render(<TurnInfo currentPlayer={currentPlayer} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renderiza el contenedor principal con el data-testid correcto', () => {
    const { getByTestId } = render(<TurnInfo currentPlayer={currentPlayer} />);
    const turnInfoElement = getByTestId('turn-info');
    expect(turnInfoElement).toBeInTheDocument();
  });

  it('renderiza el título dentro de un h3', () => {
    const { container } = render(<TurnInfo currentPlayer={currentPlayer} />);
    const h3Element = container.querySelector('h3');
    expect(h3Element).toBeInTheDocument();
    expect(h3Element).toHaveTextContent(`Turno de ${currentPlayer}`);
  });

  it('renderiza el texto del turno correctamente', () => {
    const { getByText } = render(<TurnInfo currentPlayer={currentPlayer} />);
    const textElement = getByText(`Turno de ${currentPlayer}`);
    expect(textElement).toBeInTheDocument();
  });
});
