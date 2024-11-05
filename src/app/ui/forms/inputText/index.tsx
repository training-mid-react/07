import "./style.scss";

interface Props {
    value: string,
    placeholder?: string;
    name: string;
    onChange: (name: string, value: string) => void;
    handleBlurInput: (name: string) => void
}

export const InputText = ({ value, placeholder, name, onChange,handleBlurInput }: Props) => {
    return (
        <input className="input-text" type="text" name={name} placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.name, e.target.value)} onBlur={() => handleBlurInput(name)} />
    );
}