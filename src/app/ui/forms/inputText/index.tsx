import "./style.scss";

interface Props {
    value: string,
    placeholder?: string;
    onChange: (value: string) => void;
    handleBlurInput: () => void
}

export const InputText = ({ value, placeholder, onChange,handleBlurInput }: Props) => {
    return (
        <input className="input-text" type="text" placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)} onBlur={handleBlurInput} />
    );
}