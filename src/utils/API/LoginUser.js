import { errorMessage } from "../../components/Messages/Error/ErrorMessage";
import { successMessage } from "../../components/Messages/Success/SuccessMessage";
import { PadelMatches } from "../../pages/PadelMatches/PadelMatches";
import { API, URL } from "./API";

export const loginUser = async (e) => {
    e.preventDefault();

    const user = {
        email: e.target[0].value,
        password: e.target[1].value
    };

    console.log("DATOS DEL USER =>", user);

    try {
        //todo proceso carga

        const res = await API({ endpoint: "/users/login", method: "POST" });
        console.log("res FETCH =>", res);

        //todo quito pelota

        if (res.ok) {
            localStorage.setItem("token", res.token);
            successMessage(res);
            PadelMatches();
        } else {
            errorMessage(res);
        }
        // return res;
    } catch (error) {
        console.log("Error en el login del usuario: ", error);
        alert(`Error en el login: ${error.message}`);
    }
};
