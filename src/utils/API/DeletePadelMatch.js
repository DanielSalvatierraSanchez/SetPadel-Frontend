import { Loader } from "../../components/Loader/Loader";
import { errorMessage } from "../../components/Messages/Error/ErrorMessage";
import { successMessage } from "../../components/Messages/Success/SuccessMessage";
import { PadelMatches } from "../../pages/PadelMatches/PadelMatches";
import { isAuth } from "../IsAuth";
import { API } from "./API";

export const deletePadelMatch = async (container, padelMatch) => {
    isAuth(container);

    try {
        const token = localStorage.getItem("token");
        const padelMatchId = padelMatch._id;

        const res = await API({ endpoint: `/matches/delete/${padelMatchId}`, method: "DELETE", token });
        !res ? errorMessage(container, res) : successMessage(container, res);

        Loader(container);
        setTimeout(() => {
            window.history.pushState("", "", "/padel_matches");
            PadelMatches();
        }, 2000);
        return res;
    } catch (error) {
        console.log("Error en el DELETE PADEL MATCH de los partidos desde el front: ", error.message);
    }
};
