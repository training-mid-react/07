import { useContext } from "react"
import { AppContext } from "../../../../core/state/AppContext"
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
                        className={`tablero__celda`}
                        onClick={() =>
                            // onColumnaClick(colIndex)
                            handleSelectColumn(colIndex + 1)
                        }
                    >
                        {/* Representación de la ficha */}
                        {celda && <div className={`ficha ficha--jugador${celda}`}></div>}
                    </div>
                ))
            )}
        </div>


    )
}

export default Tablero