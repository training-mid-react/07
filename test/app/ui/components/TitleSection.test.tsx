import React from 'react';

import { render } from '@testing-library/react';
import {TitleSection} from '../../../../src/app/ui/components/TitleSection';

describe('TitleSection', () => {

  // ===> Initial state
  const contentTitle = 'title';

  test('Matches the snapshot', () => {
    const {asFragment} = render(
      <TitleSection 
        contentTitle={contentTitle} 
      />
    );
  
    expect(asFragment()).toMatchSnapshot();
  });

  test('Expect to render the title', () => {
    const {getByText} = render(
      <TitleSection 
        contentTitle={contentTitle} 
      />
    );
    
    expect(getByText(contentTitle)).toBeDefined();
  });
  
});