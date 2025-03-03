import { errorMessage } from "../../components/Messages/Error/ErrorMessage";
import { successMessage } from "../../components/Messages/Success/SuccessMessage";
import { isAuth } from "../isAuth";
import { API } from "./API";

export const deleteUserOfPadelMatch = async (data) => {
    const container = document.querySelector(".modal-container");
    const matchId = data;
    const token = localStorage.getItem("token");

    isAuth(container);

    try {
        const res = await API({ endpoint: `/matches/deleteUserOfPadelMatch/${matchId}`, method: "PUT", token });
        !res ? errorMessage(container, res) : successMessage(container, res);
        return res;
    } catch (error) {
        console.log("Error en el DELETE USER de los partidos desde el front: ", error.message);
    }
};
