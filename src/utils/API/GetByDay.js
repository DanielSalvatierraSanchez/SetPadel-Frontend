import { API } from "./API";
import { isAuth } from "../isAuth";

export const getPadelMatchesByDay = async () => {
    const container = document.querySelector("#PadelMatches");
    const token = localStorage.getItem("token");
    const inputValue = localStorage.getItem("data-filter");

    isAuth(container);

    try {
        const res = await API({ endpoint: `/matches/getByDay/${inputValue}`, method: "GET", token });
        return res;
    } catch (error) {
        console.log("Error en el GET de los partidos desde el front: ", error.message);
    }
};
