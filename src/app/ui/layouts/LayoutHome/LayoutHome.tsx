import { ReactNode } from 'react';

interface Props {
    children: ReactNode | ReactNode[];
}
export const LayoutHome = ({ children }: Props) => {
    return <div>{children}</div>;
};
