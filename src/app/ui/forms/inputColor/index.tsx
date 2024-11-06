import "./style.scss";
interface Props{
    color: string;
    isDisabled?: boolean;
}

export const InputColor = ({ color, isDisabled }: Props) => {
    return (
        <input className="input-color" type="color" value={color} disabled={isDisabled}  />
    );
}