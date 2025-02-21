import { Loader } from "../../components/Loader/Loader";
import { errorMessage } from "../../components/Messages/Error/ErrorMessage";
import { successMessage } from "../../components/Messages/Success/SuccessMessage";
import { PadelMatches } from "../../pages/PadelMatches/PadelMatches";
import { isAuth } from "../isAuth";
import { API } from "./API";

export const joinPadelMatch = async (padelMatchId) => {
    const container = document.querySelector(".modal__container");
    const token = localStorage.getItem("token");

    isAuth(container);

    try {
        const res = await API({ endpoint: `/matches/join/${padelMatchId}`, method: "PUT", token });
        !res ? errorMessage(container, res) : successMessage(container, res);

        // Loader(container);
        // setTimeout(() => {
        //     PadelMatches();
        // }, 2000);
        return res;
    } catch (error) {
        console.log("Error en el JOIN de los partidos desde el front: ", error.message);
    }
};
