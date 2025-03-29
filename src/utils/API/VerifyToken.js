import { getToken } from "../IsAuth";
import { randomMessageError } from "../RandomMessageError";
import { API } from "./API";

export const verifyToken = async () => {
    const container = document.querySelector(".main");
    const token = getToken();
    if (!token) {
        console.log("TOKEN FAILED");
        return;
    }

    try {
        const res = await API({ endpoint: "/users/verify_token", method: "GET", token });
        if (!res || res.error) {
            console.log("TOKEN FAILED");
            randomMessageError(container, "❌ Token inválido.");
        }
        return res;
    } catch (error) {
        console.log("Error en el VERIFY TOKEN desde el front: ", error.message);
    }
};
