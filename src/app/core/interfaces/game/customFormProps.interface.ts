import { IPlayerForm } from '@core/interfaces';
import {
    FieldErrors,
    UseFormHandleSubmit,
    UseFormRegister,
} from 'react-hook-form';

export interface ICustomFormProps {
    selectOptions: {
        value: string;
        label: string;
    }[];
    errors: FieldErrors<IPlayerForm>;
    register: UseFormRegister<IPlayerForm>;
    handleSubmit: UseFormHandleSubmit<IPlayerForm, undefined>;
}
