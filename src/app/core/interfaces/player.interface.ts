
export interface IPlayer {
    id: number;
    name: string;
    color: string;
}

export interface IPlayersState {
    player1: IPlayer;
    player2: IPlayer;
}