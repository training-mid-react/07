import { useContext, useEffect, useState } from "react";
import { GameContext } from "../state/gameContext";
import { changePlayer } from "../state/game/actions";
import { changeNamePlayer } from "../state/players/actions";

export const usePlayer = () => {
    const { state, dispatch } = useContext(GameContext);

    const [values, setValues] = useState({
        player1: state.player1,
        player2: state.player2,
    });

    const handleChangeInput = (name: string, value: string) => {
        if (name === "player1" || name === "player2") {
            const player = { ...values[name as "player1" | "player2"], name: value };
            setValues({
                ...values,
                [name]: player
            });

        }
    }

    const handleBlurInput = (name: string) => {
        console.log("aqui");
        if (name === "player1" || name === "player2") {
            const player = values[name as "player1" | "player2"];
            console.log("player");
            console.log(player);
            
            dispatch(changeNamePlayer(player));
            if(state.playerActive.id === player.id) dispatch(changePlayer(player))
        };
    }

    useEffect(()=>{
        setValues({
            player1: state.player1,
            player2: state.player2
        })
    },[state.player1, state.player2])

    return {
        values,
        handleChangeInput,
        handleBlurInput
    }
}