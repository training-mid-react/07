import { useContext } from "react";
import { AppContext } from "../core/state/AppContext";
import { handleDrop } from "../core/state/tablero/actions";


export default function HomeContainer() {

    const { state, dispatch } = useContext(AppContext)


    const handleDropCoin = () => {

        dispatch(handleDrop(1))

    }

    return (
        
    )

}