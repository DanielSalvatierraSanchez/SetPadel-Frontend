import { errorMessage } from "../../components/Messages/Error/ErrorMessage";
import { successMessage } from "../../components/Messages/Success/SuccessMessage";
import { PadelMatches } from "../../pages/PadelMatches/PadelMatches";
import { API } from "./API";

export const joinPadelMatch = async (padelMatchId) => {
    try {
        const token = localStorage.getItem("token");
        const div = document.querySelector(".padel-match-card");
        const res = API({ endpoint: `/matches/join/${padelMatchId}`, method: "PUT", token });
        successMessage(res, div);
        const assistant = JSON.parse(localStorage.getItem("allPadelMatches"));
        console.log("assistant",assistant);
        
        // setTimeout(() => {
        //     PadelMatches()
        // }, 2000);
        //return res;
    } catch (error) {
        console.log("Error en el join de los partidos: ", error.message);
    }
};
