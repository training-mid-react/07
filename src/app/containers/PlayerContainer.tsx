import { usePlayer } from "../core/hooks/usePlayer";
import { IPlayer } from "../core/interfaces/player.interface";
import Player from "../ui/components/Player";

interface Props {
    player: IPlayer;
}

export const PlayerContainer = ({ player }: Props) => {
    const { name, handleChangeInput, handleBlurInput } = usePlayer({player});
    return (
        <Player player={player} value={name} onChangeInput={handleChangeInput} handleBlurInput={handleBlurInput} />
    );
}
