import { errorMessage } from "../../components/Messages/Error/ErrorMessage";
import { isAuth } from "../isAuth";
import { API } from "./API";

export const deleteUserOfPadelMatch = async (data) => {
    
    try {
        const matchId = data._id;
        const container = document.querySelector(".modal-container");
        const token = localStorage.getItem("token");

        isAuth(container);

        const res = await API({ endpoint: `/matches/deleteUserOfPadelMatch/${matchId}`, method: "DELETE", token });
        console.log("res DELETE USER => ", res);
        if (res.status !== 200) {
            errorMessage(res, container);
        }

        return res;
    } catch (error) {
        console.log("Error en el DELETE USER de los partidos desde el front: ", error.message);
    }
};
