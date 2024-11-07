import { CELL } from "@/app/core/interfaces/game.interface";
import "./style.scss"

interface Props {
    value: CELL;
    onClick: () => void;
}

const Box = ({ value, onClick }: Props) => {
    return (
        <div data-testid="box" className="box" onClick={onClick}>
            {
                value && <div style={{backgroundColor: value.color}} className="box__chip"></div>
            }
        </div>
    );
}

export default Box;