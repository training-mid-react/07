import { FC } from 'react';
import { Form } from '../Form';
import { IPlayerForm } from '@core/interfaces';

export const Home: FC<{ onSubmit: (data: IPlayerForm) => void }> = ({
    onSubmit,
}) => <Form onSubmit={onSubmit} />;
