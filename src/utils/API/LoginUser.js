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
        const form = document.querySelector("form");
        const res = await API({ endpoint: "/users/login", method: "POST", body: user });
        console.log("res LOGIN USER => ", res);

        if (!res || !res.user) {
            errorMessage(res, form);
        }

        setUserDataInLocalStore(res);
        successMessage(res, form);
        Loader(form);
        Header();
        setTimeout(() => {
            window.history.pushState("", "", "/padel_matches");
            PadelMatches();
        }, 1000);
    } catch (error) {
        console.log("Error en el login del usuario: ", error.message);
    }
};
