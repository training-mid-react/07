import { useBoardGame } from '@core/hooks';
import { IGuardProps } from '@core/interfaces';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Guard = ({ children }: IGuardProps) => {
    const { players } = useBoardGame();
    const navigate = useNavigate();

    useEffect(() => {
        if (!players?.length) return navigate('/');
    }, [players]);

    return children;
};
