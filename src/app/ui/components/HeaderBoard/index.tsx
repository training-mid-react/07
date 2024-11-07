import { FC } from 'react';
import { IState } from '@core/interfaces';
import { ResetButton } from '../ResetButton';

export const HeaderBoard: FC<{
    state: IState;
    onClickResetButton: () => void;
}> = ({ state, onClickResetButton }) => (
    <div className="board-layout__header">
        <section>
            <h3>Jugadores:</h3>
            <ul>
                {state?.players?.map((p) => (
                    <li key={p.name} style={{ color: p.color ?? 'black' }}>
                        {p.name}
                    </li>
                ))}
            </ul>
        </section>
        <h1>
            {state.winner
                ? `Ganador: ${state.winner}`
                : `${
                      state?.players?.find((p) => p.isCurrentPlayer)?.name
                  } es tu turno`}
        </h1>

        <ResetButton onClickResetButton={onClickResetButton} />
    </div>
);
