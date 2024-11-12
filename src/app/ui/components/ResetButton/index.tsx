import { FC } from 'react';

export const ResetButton: FC<{ onClickResetButton: () => void }> = ({
    onClickResetButton,
}) => <button onClick={onClickResetButton}>Reiniciar juego</button>;
