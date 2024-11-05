export interface CellProps {
  value: PLAYER | null;
}

export interface ColumnProps {
  columnIndex: number;
}

export enum PLAYER {
  PLAYER1 = 'player1',
  PLAYER2 = 'player2',
}
export type Cell = PLAYER | null;
export type Board = Cell[][];

export enum GAME_ACTIONS {
  DROP_TOKEN = 'DROP_TOKEN',
  RESET_GAME = 'RESET_GAME',
}

export type GameActionReducer =
  | { type: 'DROP_TOKEN'; columnIndex: number }
  | { type: 'RESET_GAME' };

export interface GameState {
  board: Board;
  currentPlayer: PLAYER;
  winner: PLAYER | null;
  isDraw: boolean;
  isDropping: boolean;
}

export interface GameProviderProps {
  children: React.ReactNode | React.ReactNode[];
}

export interface GameContextProps {
  state: GameState;
  dispatch: React.Dispatch<any>;
}
