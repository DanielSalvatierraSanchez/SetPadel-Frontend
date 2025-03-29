import { LoaderOff } from "../components/Loader/Loader";
import { verifyToken } from "./API/VerifyToken";
import { randomMessageError } from "./RandomMessageError";

// export const getToken = () => !!localStorage.getItem("token");
export const getToken = () => localStorage.getItem("token");

export const isAuth = async (parentElement) => {
    const token = getToken();

    if (!token) {
        randomMessageError(parentElement, "❌ No tienes permisos.");
        return;
    }

    try {
        const res = await verifyToken();
        if (!res) {
            randomMessageError(parentElement, "❌ Token inválido.");
            return;
        }
    } catch (error) {
        console.log("Error en el VERIFY del token desde el front: ", error.message);
        console.log("ELIMIANR TOKEN DEL LOCALSTORAGE");
        
    }

    setTimeout(() => {
        LoaderOff();
    }, 2000);
};
