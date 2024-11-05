import "./style.scss"

interface Props {
    title: string;
    subtitle: string;
    playAgain: () => void;
}

const Modal = ({ title, subtitle, playAgain }: Props) => {
    return (
        <article className="modal">
            <div className="modal__container">
                <h1>{title}</h1>
                <p>{subtitle}</p>
                <button className="modal__button" onClick={playAgain}>Volver a jugar</button>
            </div>
        </article>
    );
}

export default Modal;