import { IPlayerForm } from "../home/playerform.interface";

export interface HomeContainerHooksReturn {
    onSubmit: (data: IPlayerForm) => void;
}