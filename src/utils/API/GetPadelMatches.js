import { errorMessage } from "../../components/Messages/Error/ErrorMessage";
import { API, URL } from "./API";

export const getPadelMatches = async () => {
    try {
        const token = localStorage.getItem("token");

        // await new Promise((resolve) => setTimeout(resolve, 3000));
        //todo proceso de carga aqui abajo
        // const form = document.querySelector("form");

            // let removeError = form.querySelector(".success-message");
            // if (removeError) {
            //     removeError.remove();
            // }

            // const successMessage = document.createElement("p");
            // successMessage.classList.add("success-message");
            // successMessage.textContent = res.message;

            // const p = document.createElement("p");
            // p.textContent = "CARGANDO PARTIDOS...";
            // form.append(successMessage, p);

        const res = await API({ endpoint: "/matches", method: "GET", token });
        //todo quitar proceso de carga anterior
        return res;
        // return data;
    } catch (error) {
        console.log("Error en el GET de los partidos: ", error);
        alert(`Error en el GET de los partidos: ${error.message}`);
    }
};
