import { Loader } from "../../components/Loader/Loader";
import { API } from "./API";

export const deleteUser = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const userId = user._id;

    try {
        const div = document.querySelector(".delete-user");
        const token = localStorage.getItem("token");

        isAuth(div);

        const res = await API({ endpoint: `/users/delete/${userId}`, method: "DELETE", token });
        console.log("res DELETE => ", res);
        if (res.status !== 200) {
            errorMessage(res, div);
        }

        Loader(div);
        setTimeout(() => {
            window.history.pushState("", "", "/home");
            localStorage.clear(); // USO EL CLEAR DESDE EL MAIN.JS
            window.location.reload();
        }, 2000);

        // return res;
    } catch (error) {
        console.log("Error en el DELETE del usuario desde el front: ", error.message);
    }
};
