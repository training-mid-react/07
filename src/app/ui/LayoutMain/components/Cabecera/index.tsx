
import "./style.scss";
const Cabecera = () => {
    return (
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
    )
}

export default Cabecera 