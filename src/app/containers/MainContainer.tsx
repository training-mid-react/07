import { useGame } from "../core/hooks/useGame";
import { usePlayer } from "../core/hooks/usePlayer";
import Board from "../ui/components/Board";
import Modal from "../ui/components/Modal";
import Player from "../ui/components/Player";
import MainLayout from "../ui/layouts/MainLayout";

const MainContainer = () => {
    const { grid, playerActive, winner, isDraw, player1, player2, handleClickBoard, playAgain } = useGame();
    const { values, handleChangeInput, handleBlurInput } = usePlayer();

    return (
        <MainLayout playerNameActive={playerActive.name}>
            {/* <Player  /> */}
            <Player player={player1} value={values.player1.name} name="player1" onChangeInput={handleChangeInput} handleBlurInput={handleBlurInput} />
            <Board grid={grid} handleClick={handleClickBoard} />
            <Player player={player2} value={values.player2.name} name="player2" onChangeInput={handleChangeInput} handleBlurInput={handleBlurInput} />
            {
                (winner || isDraw) && <Modal title={winner ? `¡Felicidades a ${winner?.name}!` : "¡Empate!"} subtitle={winner ? "Has ganado el juego." : "No hay más movimientos"} playAgain={playAgain} />

            }
        </MainLayout>
    );
}

export default MainContainer;