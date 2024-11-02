import { ReactNode } from 'react';
import './style.scss';

interface Props {
    titleModal:string;
    labelButton: string;
    buttonAction: () => void;
    children: ReactNode | ReactNode[];
}
export const Modal = ({titleModal,labelButton,buttonAction, children}: Props) => {
  return (
    <article className="modal">
      <div className='modal__wrapper'>
        <h2 className='modal__title'>{titleModal}</h2>
        <section className="modal__content">
          {children}
        </section>

        <section className='modal__action'>
          <button
            className='modal__button'
            type='button' 
            onClick={buttonAction}
          >
            {labelButton}
          </button>
        </section>
      </div>
    </article>
  );
};
