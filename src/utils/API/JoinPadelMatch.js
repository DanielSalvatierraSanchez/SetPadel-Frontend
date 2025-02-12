import { successMessage } from "../../components/Messages/Success/SuccessMessage";
import { isAuth } from "../isAuth";
import { API } from "./API";

export const joinPadelMatch = async (padelMatchId) => {
    try {
        const container = document.querySelector(".modal__container");
        const token = localStorage.getItem("token");

        isAuth(container);

        const res = await API({
            endpoint: `/matches/join/${padelMatchId}`,
            method: "PUT",
            token
        });

        !res ? errorMessage(res, container) : successMessage(res, container);
        // OLD
        // if (!res) {
        //     errorMessage(res, form);
        // }
        // successMessage(res, container);
        // setTimeout(() => {
        //     PadelMatches();
        // }, 2000);

        return res;
    } catch (error) {
        console.log("Error en el JOIN de los partidos desde el front: ", error.message);
    }
};
