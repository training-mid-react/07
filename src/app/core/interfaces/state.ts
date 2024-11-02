import { IBoardGameState } from './board-state';

export interface IContext {
  state: IState;
  dispatch: React.Dispatch<IAction>;
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface IState extends IBoardGameState {}

export interface IAction {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any;
}