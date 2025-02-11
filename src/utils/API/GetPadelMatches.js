import { errorMessage } from "../../components/Messages/Error/ErrorMessage";
import { isAuth } from "../isAuth";
import { API } from "./API";

export const getPadelMatches = async () => {
    try {
        const div = document.querySelector("#PadelMatches");
        const token = localStorage.getItem("token");

        isAuth(div);

        const res = await API({ endpoint: "/matches", method: "GET", token });
        return res;
    } catch (error) {
        console.log("Error en el GET de los partidos desde el front: ", error.message);
    }
};
