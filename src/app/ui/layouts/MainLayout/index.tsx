import { ReactNode } from "react";
import "./style.scss";

interface Props {
    children: ReactNode;
    playerNameActive: string;


}

const MainLayout = ({ children, playerNameActive }: Props) => {
    return (
        <section className="layout">
            <h1 className="layout__title">4 en línea</h1>
            <div className="layout__player">
                <p>Es turno de <span>{playerNameActive}</span></p>
            </div>
            <div className="layout__content">
                {children}
            </div>
        </section>
    );
}

export default MainLayout;