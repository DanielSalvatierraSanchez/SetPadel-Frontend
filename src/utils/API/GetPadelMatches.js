import { errorMessage } from "../../components/Messages/Error/ErrorMessage";
import { successMessage } from "../../components/Messages/Success/SuccessMessage";
import { isAuth } from "../isAuth";
import { API } from "./API";

export const getPadelMatches = async () => {
    try {
        const div = document.querySelector("#PadelMatches");
        const token = localStorage.getItem("token");
        if (!token) {
            errorMessage(res, div);
            return;
        }

        isAuth(div);

        const res = await API({ endpoint: "/matches", method: "GET", token });
        // successMessage(res, div);
        return res;
    } catch (error) {
        console.log("Error en el GET de los partidos: ", error.message);
    }
};
