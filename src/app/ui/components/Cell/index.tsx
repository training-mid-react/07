import { FC } from 'react';
import { PLAYER } from '../../../../core/interfaces';
import './style.scss';

export interface CellProps {
  value: PLAYER | null;
}

export const Cell: FC<CellProps> = ({ value }) => {

  return (
    <>
    <div className={`cell cell__${value}`} />
    <div className='cell__frame'></div>
    </>
  );
};
