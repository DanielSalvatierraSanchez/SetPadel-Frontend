import { successMessage } from "../../components/Messages/Success/SuccessMessage";
import { API } from "./API";

export const joinPadelMatch = async (padelMatchId) => {
    try {
        const token = localStorage.getItem("token");
        const div = document.querySelector(".padel-match-card");
        const res = API({ endpoint: `/matches/join/${padelMatchId}`, method: "PUT", token });
        successMessage(res, div);
        //return res;
    } catch (error) {
        console.log("Error en el join de los partidos: ", error.message);
    }
};
