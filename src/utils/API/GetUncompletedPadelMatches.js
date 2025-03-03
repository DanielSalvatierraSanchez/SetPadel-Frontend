import { isAuth } from "../IsAuth";
import { API } from "./API";

export const getUncompletedPadelMatches = async (container) => {
    const token = localStorage.getItem("token");

    isAuth(container);

    try {
        const res = await API({ endpoint: "/matches/getUncompleted", method: "GET", token });
        return res;
    } catch (error) {
        console.log("Error en el GET UNCOMPLETED desde el front: ", error.message);
    }
};
