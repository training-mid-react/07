import { ReactNode } from 'react';
import './style.scss';

interface Props {
  header: JSX.Element
  scoreboard: JSX.Element
  children: ReactNode | ReactNode[];
}

export const LayoutMain = ({ header, scoreboard, children }: Props) => {

  return( 
    <div className='layout-main'>
      <header className='layout-main__header'>  
        {header}     
      </header>
      <main className='layout-main__content'>
        <section className='layout-main__scoreboard'>
          {scoreboard}
        </section>

        <section>
          {children}        
        </section>  
      </main>
    </div>
  );
};