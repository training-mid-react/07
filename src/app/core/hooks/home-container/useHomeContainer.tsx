import { IPlayerForm } from '@core/interfaces';
import { AppContext } from '@core/state/AppContext';
import { setPlayeres } from '@core/state/board-game/actions';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

export const useHomeContainer = () => {
    const { dispatch } = useContext(AppContext);
    const navigate = useNavigate();
    const onSubmit = (data: IPlayerForm) => {
        dispatch(
            setPlayeres([
                { ...data.player1, id: 1, isCurrentPlayer: true },
                { ...data.player2, id: 2 },
            ])
        );
        navigate('/board-game');
    };

    return { onSubmit };
};
