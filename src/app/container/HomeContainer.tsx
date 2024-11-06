import { LayoutMain } from "../ui/layouts/LayoutMain";
import { useGetTablero } from "../core/hooks/useGetTablero";
import Cabecera from "../ui/components/Cabecera";
import Tablero from "../ui/components/Tablero";




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