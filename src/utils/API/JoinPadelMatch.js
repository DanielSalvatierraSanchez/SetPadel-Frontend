import { successMessage } from "../../components/Messages/Success/SuccessMessage";
import { API } from "./API";

export const joinPadelMatch = async (padelMatchId) => {
    try {
        const div = document.querySelector(".modal__container");
        const token = localStorage.getItem("token");

        isAuth(div);

        const res = await API({
            endpoint: `/matches/join/${padelMatchId}`,
            method: "PUT",
            token
        });

        !res ? errorMessage(res, form) : successMessage(res, div);
        // OLD
        // if (!res) {
        //     errorMessage(res, form);
        // }
        // successMessage(res, div);
        // setTimeout(() => {
        //     PadelMatches();
        // }, 2000);

        return res;
    } catch (error) {
        console.log("Error en el JOIN de los partidos desde el front: ", error.message);
    }
};
