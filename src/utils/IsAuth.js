import { LoaderOff } from "../components/Loader/Loader";
import { randomMessageError } from "./RandomMessageError";

export const getToken = () => !!localStorage.getItem("token");

export const isAuth = (parentElement) => {
    if (!getToken()) {
        randomMessageError(parentElement, "❌ No tienes permisos.");
        return;
    }
    console.log("Hola desde IsAuth");

    setTimeout(() => {
        LoaderOff();
    }, 2000);
};
