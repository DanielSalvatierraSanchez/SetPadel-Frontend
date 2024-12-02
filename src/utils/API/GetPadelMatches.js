import { errorMessage } from "../../components/Messages/Error/ErrorMessage";
import { API } from "./API";

export const getPadelMatches = async () => {
    try {
        const div = document.querySelector("#PadelMatches");
        const token = localStorage.getItem("token");

        // await new Promise((resolve) => setTimeout(resolve, 3000));
        //todo proceso de carga aqui abajo
        const res = await API({ endpoint: "/matches", method: "GET", token });

        if (!token) {
            errorMessage(res, div);
        }

        //todo quitar proceso de carga anterior
        return res;
    } catch (error) {
        console.log("Error en el GET de los partidos: ", error.message);
    }
};
