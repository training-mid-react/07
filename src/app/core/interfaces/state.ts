import React from "react";
import { IPlayer, IPlayersState } from "./player.interface";
import { IGameState } from "./game.interface";

export interface IContext {
    state: IState;
    dispatch: React.Dispatch<IAction>;
}

export interface IState extends IGameState, IPlayersState {}

export interface IAction {
    type: string;
    payload: any;
}