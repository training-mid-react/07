import React from 'react';
import { render } from '@testing-library/react';

import {ScoreBoard} from '../../../src/app/ui/components/ScoreBoard';

describe('ScoreBoard', () => {

  test('Matches the snapshot', () => {
    const {asFragment} = render(
      <ScoreBoard 
        currentPlayer={'player1'} 
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('Expect to render the current player', () => {
    const {getByText} = render(
      <ScoreBoard 
        currentPlayer={'player1'} 
      />
    );
    
    expect(getByText('Turn player1')).toBeDefined();
    
  });

});