import { ReactNode } from "react";
import "./style.scss";
import { IPlayer } from "@/app/core/interfaces/player.interface";

interface Props {
    children: ReactNode;
    playerActive: IPlayer;


}

const MainLayout = ({ children, playerActive }: Props) => {
    return (
        <section className="layout">
            <h1 className="layout__title">4 en línea</h1>
            <div className="layout__player">
                <p>Es turno de <span style={{ color: playerActive.color }}>{playerActive.name}</span></p>
            </div>
            <div className="layout__content">
                {children}
            </div>
        </section>
    );
}

export default MainLayout;