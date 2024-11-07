import { useContext, useEffect, useState } from "react";
import { GameContext } from "../state/gameContext";
import { changePlayer } from "../state/game/actions";
import { changeNamePlayer } from "../state/players/actions";
import { IPlayer } from "../interfaces/player.interface";

interface Props {
    player: IPlayer;
}

export const usePlayer = ({ player }: Props) => {
    const { state, dispatch } = useContext(GameContext);

    const [name, setName] = useState("");

    const handleChangeInput = (value: string) => {
        setName(value)
    }

    const handleBlurInput = () => {
        const newPlayer = {...player, name}
        dispatch(changeNamePlayer(newPlayer));
        if (state.playerActive.id === newPlayer.id) dispatch(changePlayer(newPlayer))

    }

    useEffect(() => {
        setName("")
    }, [state.player1, state.player2])

    return {
        name,
        handleChangeInput,
        handleBlurInput,
        player1: state.player1,
        player2: state.player2
    }
}