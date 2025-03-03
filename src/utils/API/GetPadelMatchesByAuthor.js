import { isAuth } from "../IsAuth";
import { API } from "./API";

export const getPadelMatchesByAuthor = async (container) => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));
    const userId = user._id;

    isAuth(container);

    try {
        const res = await API({ endpoint: `/matches/getByAuthor/${userId}`, method: "GET", token });
        return res;
    } catch (error) {
        console.log("Error en el GET PM BY AUTHOR desde el front: ", error.message);
    }
};
