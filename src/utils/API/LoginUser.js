import { Header } from "../../components/Header/Header";
import { Loader, LoaderOff } from "../../components/Loader/Loader";
import { errorMessage } from "../../components/Messages/Error/ErrorMessage";
import { successMessage } from "../../components/Messages/Success/SuccessMessage";
import { PadelMatches } from "../../pages/PadelMatches/PadelMatches";
import { setUserDataToLocalStore } from "../SetUserData";
import { API } from "./API";

export const loginUser = async (e) => {
    e.preventDefault();
    const [email, password] = e.target;
    const user = {
        email: email.value,
        password: password.value
    };

    try {
        //todo proceso carga
        Loader();
        const res = await API({ endpoint: "/users/login", method: "POST", body: user });
        console.log("res FETCH =>", res);
        // LoaderOff()
        //todo quito pelota
        if (res) {
            setUserDataToLocalStore(res);
            successMessage(res);
            Header()
            setTimeout(() => {
                PadelMatches();
            }, 2000);
        } else {
            errorMessage(res);
        }
    } catch (error) {
        console.log("Error en el login del usuario: ", error.message);
    }
};
