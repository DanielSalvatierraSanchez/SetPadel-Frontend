import { Loader, LoaderOff } from "../components/Loader/Loader";
import { randomMessageError } from "./RandomMessageError";

export const getToken = () => !!localStorage.getItem("token");
export const isAuth = (parentElement) => {
    if (!getToken()) {
        randomMessageError(parentElement, "❌ No estás autorizado, primero debes realizar Login.");
    }
    setTimeout(() => {
        LoaderOff()
    }, 1000);
};
