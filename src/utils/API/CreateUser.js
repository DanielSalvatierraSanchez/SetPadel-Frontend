import { Loader } from "../../components/Loader/Loader";
import { errorMessage } from "../../components/Messages/Error/ErrorMessage";
import { PadelMatches } from "../../pages/PadelMatches/PadelMatches";
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
        //todo pelota
        Loader()
        const res = await API({ endpoint: "/users/register", method: "POST", isJSON: false, body: formData });

        //todo quito pelota
        Loader()
        if (res) {
            localStorage.setItem("token", res.token);
                PadelMatches();
                return res;
            } else {
                errorMessage(res)
            }
        // else {
        //     const form = document.querySelector("form");

        //     let removeError = form.querySelector(".error-message");
        //     if (removeError) {
        //         removeError.remove();
        //     }

        //     const errorMessage = document.createElement("p");
        //     errorMessage.classList.add("error-message");
        //     errorMessage.textContent = res.message;
        //     form.append(errorMessage);

        //     // setTimeout(() => {
        //     //     Register();
        //     // }, 2000);
        // }

        // return res;
    } catch (error) {
        console.log("Error en el registro del usuario: ", error);
        alert(`Error en el registro: ${error.message}`);
    }
};
