import { Loader } from "../../components/Loader/Loader";
import { errorMessage } from "../../components/Messages/Error/ErrorMessage";
import { successMessage } from "../../components/Messages/Success/SuccessMessage";
import { MyPadelMatches } from "../../pages/MyPadelMatches/MyPadelMatches";
import { isAuth } from "../isAuth";
import { API } from "./API";

export const deletePadelMatch = async (padelMatch) => {
    const container = document.querySelector(".modal");

    isAuth(container);

    try {
        const token = localStorage.getItem("token");
        const padelMatchId = padelMatch._id;

        const res = await API({ endpoint: `/matches/delete/${padelMatchId}`, method: "DELETE", token });
        !res ? errorMessage(container, res) : successMessage(container, res);

        Loader(container);
        setTimeout(() => {
            MyPadelMatches();
        }, 2000);
        return res;
    } catch (error) {
        console.log("Error en el DELETE PADEL MATCH de los partidos desde el front: ", error.message);
    }
};
