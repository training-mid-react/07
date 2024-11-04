import { GameState } from "./gameState";


export interface Icontext {
    state: GameState;
    dispatch: React.Dispatch<IAction>;
}



// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface IState extends GameState { }

export interface IAction {
    type: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    payload?: any;
}