import { API } from "./API";

export const joinPadelMatch = async (padelMatchId) => {
    try {
        const div = document.querySelector("#PadelMatches");
        const token = localStorage.getItem("token");
        const res = API({ endpoint: `/join/${padelMatchId}`, method: "PUT", token });
        return res;
    } catch (error) {
        console.log("Error en el join de los partidos: ", error.message);
    }
};
