
import { IAction, IState } from "../interfaces/state";
import { tableroCases, tableroInitialState } from "./tablero";


export const initialState = {

    ...tableroInitialState

}
export const reducer = (state: IState, action: IAction) => {

    const cases = { ...tableroCases }

    return cases[action.type](state, action.payload) || state;


}