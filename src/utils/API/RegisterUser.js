import { Header } from "../../components/Header/Header";
import { Loader } from "../../components/Loader/Loader";
import { errorMessage } from "../../components/Messages/Error/ErrorMessage";
import { successMessage } from "../../components/Messages/Success/SuccessMessage";
import { PadelMatches } from "../../pages/PadelMatches/PadelMatches";
import { setUserDataInLocalStore } from "../SetUserData";
import { API } from "./API";

export const registerUser = async (e) => {
    e.preventDefault();
    const form = document.querySelector("form");
    const [name, email, password, phone, image] = e.target;

    const formData = new FormData();
    formData.append("name", name.value.trim());
    formData.append("email", email.value.trim());
    formData.append("password", password.value.trim());
    formData.append("phone", phone.value.trim());
    formData.append("image", image?.files[0]);
    // checkRegisterParams(phone, form, "El teléfono debe de tener 9 dígitos.");

    try {
        const res = await API({
            endpoint: "/users/register",
            method: "POST",
            body: formData,
            isJSON: false
        });

        if (!res.token) {
            errorMessage(res, form);
        }

        setUserDataInLocalStore(res);
        successMessage(res, form);
        Loader(form);
        Header();
        setTimeout(() => {
            window.history.pushState("", "", "/padel_matches");
            PadelMatches();
        }, 2000);
    } catch (error) {
        console.log("Error en el REGISTER del usuario desde el front: ", error.message);
    }
};
