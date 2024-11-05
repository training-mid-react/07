import { LayoutMain } from "../ui/LayoutMain";
import { useGetTablero } from "../core/hooks/useGetTablero";

import Tablero from '../ui/LayoutMain/components/Tablero/index';
import Cabecera from '../ui/LayoutMain/components/Cabecera/index';


export default function HomeContainer() {

    const { currentPlayer, isAWinner, winnerPlayer, handleClickButton, handleResetGame } = useGetTablero()

    return (
        <LayoutMain>

            <Cabecera currentPlayer={currentPlayer} />
            <Tablero handleSelectColumn={handleClickButton} />
            {isAWinner && winnerPlayer != -1 && <h1>Ganaste Jugador {winnerPlayer}</h1>}
            {isAWinner && <button onClick={handleResetGame}>Restablecer Juego</button>}
            {
                !isAWinner && winnerPlayer == -1 &&
                <>
                    <h1>Empate</h1>
                    <button onClick={handleResetGame}>Restablecer Juego</button>
                </>
            }
        </LayoutMain >
    )

}