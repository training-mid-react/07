import { IPlayer } from "@/app/core/interfaces/player.interface";
import { InputText } from "../../forms/inputText";
import "./style.scss"
import { InputColor } from "../../forms/inputColor";

interface Props {
    player: IPlayer;
    value: string;
    onChangeInput: (value: string) => void;
    handleBlurInput: () => void
}

const Player = ({ player, value, onChangeInput, handleBlurInput }: Props) => {
    return (
        <article className="player">
            <div className="player__flex">
                <InputColor color={player.color} isDisabled={true} />
                <h2>{player.name}</h2>
            </div>
            <InputText value={value} onChange={onChangeInput} placeholder="Escribe tu nombre" handleBlurInput={handleBlurInput} />
        </article>
    );
}

export default Player;