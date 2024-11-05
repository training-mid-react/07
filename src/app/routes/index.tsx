import { createHashRouter } from "react-router-dom";
import MainContainer from "../containers/MainContainer";
import { GameProvider } from "../core/state/gameContext";


export const routes = createHashRouter([
    {
        path: "",
        element:<GameProvider><MainContainer /></GameProvider>  ,
    },
]);