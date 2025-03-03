import { isAuth } from "../IsAuth";
import { API } from "./API";

export const getPadelMatches = async () => {
    const container = document.querySelector("#PadelMatches");
    const token = localStorage.getItem("token");

    isAuth(container);

    try {
        const res = await API({ endpoint: "/matches", method: "GET", token });
        return res;
    } catch (error) {
        console.log("Error en el GET de los partidos desde el front: ", error.message);
    }
};
