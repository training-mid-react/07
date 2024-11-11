import React from 'react';
import { vi } from 'vitest';
import { fireEvent, render } from '@testing-library/react';

import {Modal} from '../../../../src/app/ui/components/Modal';

describe('Modal', () => {

  // ===> Initial state
  const titleModal = 'titleModal';
  const labelButton = 'buttonLabel';

  test('Matches the snapshot', () => {
    const buttonAction = vi.fn();

    const {asFragment} = render(
      <Modal
        titleModal={titleModal}
        labelButton={labelButton}
        buttonAction={buttonAction}
      >
         Content Modal
      </Modal>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('Expect to render the modal', () => {
    const buttonAction = vi.fn();

    const {getByText} = render(
      <Modal
        titleModal={titleModal}
        labelButton={labelButton}
        buttonAction={buttonAction}
      >
         Content Modal
      </Modal>
    );

    expect(getByText(titleModal)).toBeDefined();
    expect(getByText(labelButton)).toBeDefined();
  });

  test('Expect to call the button action', () => {
    const buttonAction = vi.fn();

    const {getByText} = render(
      <Modal
        titleModal={titleModal}
        labelButton={labelButton}
        buttonAction={buttonAction}
      >
         Content Modal
      </Modal>
    );

    fireEvent.click(getByText(labelButton));
    expect(buttonAction).toHaveBeenCalledTimes(1);
  });
});