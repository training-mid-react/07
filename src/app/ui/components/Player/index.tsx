import { IPlayer } from "@/app/core/interfaces/player.interface";
import { InputText } from "../../forms/inputText";
import "./style.scss"

interface Props{
    player: IPlayer;
    value: string;
    name: string;
    onChangeInput: (name: string, value: string) => void;
    handleBlurInput: (name: string) => void
}

const Player = ({player, value, name, onChangeInput, handleBlurInput}: Props) => {
    return ( 
        <article className="player">
            <h2>{player.name}</h2>
            <InputText value={value} onChange={onChangeInput} placeholder="Escribe tu nombre" name={name} handleBlurInput={handleBlurInput}  />
        </article>
     );
}
 
export default Player;