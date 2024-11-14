import { PadelMatches } from "../../pages/PadelMatches/PadelMatches";
import { Register } from "../../pages/Register/Register";
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
            body: formData,
        });
        console.log(res);

        const postUser = await res.json();
        console.log("FINAL FELIZ!!! =>", postUser);

        localStorage.setItem("token", postUser.token);

        if (res.status !== 201) {
            const form = document.querySelector("form");
            let removeError = form.querySelector(".message-error");
            if (removeError) {
                removeError.remove();
            }
            const messageError = document.createElement("p");
            messageError.classList.add("message-error");
            messageError.textContent = postUser.message;
            form.append(messageError);
            setTimeout(() => {
                Register();
            }, 2000);
        } else {
            const form = document.querySelector("form");
            let removeError = form.querySelector(".message-error");
            if (removeError) {
                removeError.remove();
            }
            const messageError = document.createElement("p");
            messageError.classList.add("message-error");
            messageError.textContent = postUser.message;
            form.append(messageError);
            const p = document.createElement("p")
            p.textContent = "CARGANDO PARTIDOS..."
            form.append(p);
            setTimeout(() => {
                PadelMatches();
            }, 3000);
        }

        return postUser;
    } catch (error) {
        console.log("Error en el registro del usuario: ", error);
        alert(`Error en el registro: ${error.message}`);
    }
};
