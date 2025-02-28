import { isAuth } from "../isAuth";
import { API } from "./API";

export const deletePadelMatch = async (data) => {
    try {
        const matchId = data;
        const container = document.querySelector("#DeletePadelMatches");
        const token = localStorage.getItem("token");

        isAuth(container);

        const res = await API({ endpoint: `/matches//delete/${matchId}`, method: "DELETE", token });
        !res ? errorMessage(container, res) : successMessage(container, res);
        return res;
    } catch (error) {
        console.log("Error en el DELETE USER de los partidos desde el front: ", error.message);
    }
};
