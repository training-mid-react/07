
import "./style.scss";

interface Props {
    currentPlayer: number
}

const Cabecera = ({ currentPlayer }: Props) => {
    return (
        <>
            <section className="cabecera">
                <div>
                    <h2>Jugador 1</h2>
                    <div className="ficha-cabecera ficha-cabecera--jugador1"></div>
                </div>
                <div>
                    <h2>Jugador 2</h2>
                    <div className="ficha-cabecera ficha-cabecera--jugador2"></div>
                </div>
            </section>
            <h3>Turno del jugador: {currentPlayer}</h3>
        </>

    )
}

export default Cabecera 