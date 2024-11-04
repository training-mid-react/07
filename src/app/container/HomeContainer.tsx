import { LayoutMain } from "../ui/LayoutMain";
import { useGetTablero } from "../core/hooks/useGetTablero";
import { useRef } from "react";


export default function HomeContainer() {

    const inputRef = useRef(null)


    const { currentPlayer, isAWinner, handleClickButton, handleResetGame } = useGetTablero()

    return (
        <LayoutMain>
            <>
                <div>Jugador {currentPlayer}</div>
                <input type="number" max={7} min={1} ref={inputRef} />
                {isAWinner
                    ? <button onClick={handleResetGame}>Restablecer Juego</button>
                    : <button onClick={() => handleClickButton(inputRef.current.value)}>Click me</button>
                }


                {isAWinner && alert(`Ganaste Jugador ${currentPlayer ? 1 : 2}`)}

            </>
        </LayoutMain >

    )

}