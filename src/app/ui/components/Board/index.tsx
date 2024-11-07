import { CELL } from "@/app/core/interfaces/game.interface";
import Box from "../Box";
import "./style.scss"

interface Props {
    grid: CELL[][];
    handleClick: (col:number) => void;
}

const Board = ({ grid, handleClick }: Props) => {
    return (
        <article className="board">
            {
                grid.map((row, i) => (
                    <div key={i} className="board__row">
                        {
                            row.map((cell, j) => (
                                <Box key={j} value={cell} onClick={()=>handleClick(j)} />
                            ))
                        }
                    </div>
                ))
            }
        </article>
    );
}

export default Board;