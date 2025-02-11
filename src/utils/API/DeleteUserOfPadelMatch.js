import { errorMessage } from "../../components/Messages/Error/ErrorMessage";
import { isAuth } from "../isAuth";
import { API } from "./API";

export const deleteUserOfPadelMatch = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const userId = user._id;

    try {
        const div = document.querySelector(".modal__container");
        const token = localStorage.getItem("token");

        isAuth(div);

        const res = await API({ endpoint: `/matches/deleteUser/${userId}`, method: "DELETE", token });
        console.log("res DELETE USER => ", res);
        if (res.status !== 200) {
            errorMessage(res, div);
        }
    } catch (error) {
        console.log("Error en el DELETE USER de los partidos desde el front: ", error.message);
    }
};
