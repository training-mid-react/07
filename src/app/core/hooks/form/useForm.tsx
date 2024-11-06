import { IPlayerForm } from '@core/interfaces';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

export const useform = () => {
    const {
        register,
        setError,
        watch,
        handleSubmit,
        formState: { errors },
    } = useForm<IPlayerForm>();

    const player1Color = watch('player1.color');
    const player2Color = watch('player2.color');

    const selectOptions = [
        { value: '', label: 'Selecciona un color' },
        { value: 'red', label: 'Rojo' },
        { value: 'blue', label: 'Azul' },
    ];

    useEffect(() => {
        if (player1Color && player2Color && player1Color === player2Color) {
            setError('player1.color', {
                type: 'custom',
                message: 'Los jugadores no pueden compartir el mismo color',
            });
            setError('player2.color', {
                type: 'custom',
                message: 'Los jugadores no pueden compartir el mismo color',
            });
        }
    }, [player1Color, player2Color]);

    return { selectOptions, errors, register, handleSubmit };
};
