import { successMessage } from "../../components/Messages/Success/SuccessMessage";
import { API } from "./API";

export const joinPadelMatch = async (padelMatchId) => {
    try {
        const div = document.querySelector(".modal__container");
        const token = localStorage.getItem("token");
        if (!token) {
            errorMessage(res, div);
            return;
        }

        const res = await API({
            endpoint: `/matches/join/${padelMatchId}`,
            method: "PUT",
            token
        });

        !res ? errorMessage(res, form) : successMessage(res, div);
        // setTimeout(() => {
        //     PadelMatches();
        // }, 2000);

        return res;
    } catch (error) {
        console.log("Error en el join de los partidos: ", error.message);
    }
};
