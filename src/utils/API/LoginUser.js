import { Header } from "../../components/Header/Header";
import { Loader } from "../../components/Loader/Loader";
import { errorMessage } from "../../components/Messages/Error/ErrorMessage";
import { successMessage } from "../../components/Messages/Success/SuccessMessage";
import { PadelMatches } from "../../pages/PadelMatches/PadelMatches";
import { setUserDataInLocalStore } from "../SetUserData";
import { API } from "./API";

export const loginUser = async (e) => {
    e.preventDefault();
    const [email, password] = e.target;
    const user = {
        email: email.value,
        password: password.value
    };

    try {
        const container = document.querySelector("form");
        const res = await API({ endpoint: "/users/login", method: "POST", body: user });
        if (!res || !res.user) {
            errorMessage(container, res);
        }

        setUserDataInLocalStore(res);
        successMessage(container, res);
        Loader(container);
        Header();
        setTimeout(() => {
            window.history.pushState("", "", "/padel_matches");
            PadelMatches();
        }, 1000);
    } catch (error) {
        console.log("Error en el LOGIN del usuario desde el front: ", error.message);
    }
};
