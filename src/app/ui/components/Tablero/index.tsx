import { useContext } from "react"
import { AppContext } from "../../../core/state/AppContext"
import "./style.scss"


interface Props {
    handleSelectColumn: (column: number) => void
}

const Tablero = ({ handleSelectColumn }: Props) => {

    const { state } = useContext(AppContext)

    const { tablero } = state

    return (
        <div className="tablero">
            {tablero.map((fila, rowIndex) =>
                fila.map((celda, colIndex) => (
                    <div
                        key={`${rowIndex}-${colIndex}`}
                        className={`tablero__celda fila${rowIndex + 1}`}
                        onClick={() =>
                            handleSelectColumn(colIndex + 1)
                        }
                    >
                        {celda && <div className={`ficha ficha--jugador${celda}`}></div>}
                    </div>
                ))
            )}
        </div>


    )
}

export default Tablero