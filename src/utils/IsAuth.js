import { API } from "./API/API";
import { getToken } from "./GetToken";

export const isAuth = async () => {
    const token = getToken();

    try {
        const res = await API({ endpoint: "/users/verify_token", method: "GET", token });
        if (!res.user) {
            // randomMessageError(parentElement, "❌ Token o usuario inválido.");
            localStorage.clear();
            window.history.pushState("", "", "/home");
            window.location.reload();
        }
        return res;
    } catch (error) {
        console.log("Error en isAuth desde el front: ", error.message);
    }
};
