import { Loader, LoaderOff } from "../../components/Loader/Loader";
import { errorMessage } from "../../components/Messages/Error/ErrorMessage";
import { API } from "./API";

export const getPadelMatches = async () => {
    try {
        const div = document.querySelector("#PadelMatches");
        const token = localStorage.getItem("token");
        if (!token) {
            errorMessage(res, div);
            return;
        }
        Loader(div)
        const res = await API({ endpoint: "/matches", method: "GET", token });
        LoaderOff()
        return res;
    } catch (error) {
        console.log("Error en el GET de los partidos: ", error.message);
    }
};
