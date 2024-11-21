import { errorMessage } from "../../components/Messages/Error/ErrorMessage";
import { successMessage } from "../../components/Messages/Success/SuccessMessage";
import { API, URL } from "./API";

export const getPadelMatches = async () => {
    try {
        const token = localStorage.getItem("token");

        // await new Promise((resolve) => setTimeout(resolve, 3000));
        //todo proceso de carga aqui abajo

        const res = await API({ endpoint: "/matches", method: "GET", token });
        
        res.ok ? successMessage(res) : errorMessage(res);

        //todo quitar proceso de carga anterior
        return res;
    } catch (error) {
        console.log("Error en el GET de los partidos: ", error);
        alert(`Error en el GET de los partidos: ${error.message}`);
    }
};
