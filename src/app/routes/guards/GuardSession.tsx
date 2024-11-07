import { IGuardProps } from '@core/interfaces';
import { AppContext } from '@core/state/AppContext';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Guard = ({ children }: IGuardProps) => {
    const { state } = useContext(AppContext);
    const players = state.players;
    const navigate = useNavigate();

    useEffect(() => {
        if (!players?.length) return navigate('/');
    }, [players]);

    return children;
};
