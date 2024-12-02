import { Loader } from "../../components/Loader/Loader";
import { errorMessage } from "../../components/Messages/Error/ErrorMessage";
import { successMessage } from "../../components/Messages/Success/SuccessMessage";
import { PadelMatches } from "../../pages/PadelMatches/PadelMatches";
import { setUserDataToLocalStore } from "../SetUserData";
import { API } from "./API";

export const registerUser = async (e) => {
    e.preventDefault();
    const [name, email, password, phone, image] = e.target;

    const formData = new FormData();
    formData.append("name", name.value);
    formData.append("email", email.value);
    formData.append("password", password.value);
    formData.append("phone", phone.value);
    formData.append("image", image?.files[0]);

    try {
        //todo duplica la pelota IF todos los datos estan bien poner proceso de carga
        const form = document.querySelector("form");
        Loader(form);
        const res = await API({ endpoint: "/users/register", method: "POST", body: formData, isJSON: false });
        console.log("res FETCH =>", res);
        //todo quito pelota
        if (res) {
            setUserDataToLocalStore(res);
            successMessage(res);
            setTimeout(() => {
                PadelMatches();
            }, 2000);
        } else {
            errorMessage(res);
        }
    } catch (error) {
        console.log("Error en el registro del usuario: ", error.message);
    }
};
