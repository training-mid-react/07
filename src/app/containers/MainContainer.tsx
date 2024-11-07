import { useGame } from "../core/hooks/useGame";
import Board from "../ui/components/Board";
import Modal from "../ui/components/Modal";
import MainLayout from "../ui/layouts/MainLayout";
import { PlayerContainer } from "./PlayerContainer";

const MainContainer = () => {
    const { grid, playerActive, winner, isDraw, player1, player2, handleClickBoard, playAgain } = useGame();
    

    return (
        <MainLayout playerActive={playerActive}>
            {/* <Player  /> */}
            <PlayerContainer player={player1} />
            <Board grid={grid} handleClick={handleClickBoard} />
            <PlayerContainer player={player2} />
            {/* <Player player={player2} value={values.player2.name} name="player2" onChangeInput={handleChangeInput} handleBlurInput={handleBlurInput} /> */}
            {
                (winner || isDraw) && <Modal title={winner ? `¡Felicidades a ${winner?.name}!` : "¡Empate!"} subtitle={winner ? "Has ganado el juego." : "No hay más movimientos"} playAgain={playAgain} />

            }
        </MainLayout>
    );
}

export default MainContainer;