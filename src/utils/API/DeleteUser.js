import { Loader } from "../../components/Loader/Loader";
import { errorMessage } from "../../components/Messages/Error/ErrorMessage";
import { successMessage } from "../../components/Messages/Success/SuccessMessage";
import { isAuth } from "../isAuth";
import { API } from "./API";

export const deleteUser = async () => {
    const container = document.querySelector(".profile-form");
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));
    const userId = user._id;

    isAuth(container);
    try {
        const res = await API({ endpoint: `/users/delete/${userId}`, method: "DELETE", token });
        !res ? errorMessage(container, res) : successMessage(container, res);
        // if (res.status !== 200) {
        //     errorMessage(container, res);
        // }

        Loader(container);
        setTimeout(() => {
            window.history.pushState("", "", "/home");
            localStorage.clear(); // USO EL CLEAR DESDE EL MAIN.JS
            window.location.reload();
        }, 2000);
        return res;
    } catch (error) {
        console.log("Error en el DELETE del usuario desde el front: ", error.message);
    }
};
