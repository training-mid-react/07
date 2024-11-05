import { FC } from 'react';
import { CellProps } from '../../../core/interfaces';

export const Cell: FC<CellProps> = ({ value }) => {
  return <div className={`cell cell__${value}`}>-</div>;
};
