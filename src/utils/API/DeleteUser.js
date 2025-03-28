import { Loader } from "../../components/Loader/Loader";
import { errorMessage } from "../../components/Messages/Error/ErrorMessage";
import { successMessage } from "../../components/Messages/Success/SuccessMessage";
import { isAuth } from "../IsAuth";
import { API } from "./API";

export const deleteUser = async (container) => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));
    const userId = user._id;

    isAuth(container);

    try {
        const res = await API({ endpoint: `/users/delete/${userId}`, method: "DELETE", token });
        !res ? errorMessage(container, res) : successMessage(container, res);

        Loader(container);
        setTimeout(() => {
            window.history.pushState("", "", "/home");
            localStorage.clear();
            window.location.reload();
        }, 2000);
        return res;
    } catch (error) {
        console.log("Error en el DELETE del usuario desde el front: ", error.message);
    }
};
