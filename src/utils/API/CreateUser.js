import { PadelMatches } from "../../pages/PadelMatches/PadelMatches";
import { URL } from "./API";

export const registerUser = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", e.target[0].value);
    formData.append("email", e.target[1].value);
    formData.append("password", e.target[2].value);
    formData.append("phone", e.target[3].value);
    formData.append("image", e.target[4].files[0]);

    try {
        const res = await fetch(URL + "/users/register", {
            method: "POST",
            body: formData
        });
        console.log("res FETCH =>", res);

        const data = await res.json();
        console.log("FINAL FELIZ data !!!", data);

        if (res.ok) {
            localStorage.setItem("token", data.token);

            const form = document.querySelector("form");

            let removeError = form.querySelector(".success-message");
            if (removeError) {
                removeError.remove();
            }

            const successMessage = document.createElement("p");
            successMessage.classList.add("success-message");
            successMessage.textContent = data.message;

            const p = document.createElement("p");
            p.textContent = "CARGANDO PARTIDOS...";
            form.append(successMessage, p);

            setTimeout(() => {
                PadelMatches();
            }, 2000);
        } else {
            const form = document.querySelector("form");

            let removeError = form.querySelector(".error-message");
            if (removeError) {
                removeError.remove();
            }

            const errorMessage = document.createElement("p");
            errorMessage.classList.add("error-message");
            errorMessage.textContent = data.message;
            form.append(errorMessage);

            // setTimeout(() => {
            //     Register();
            // }, 2000);
        }

        // return data;
    } catch (error) {
        console.log("Error en el registro del usuario: ", error);
        alert(`Error en el registro: ${error.message}`);
    }
};
