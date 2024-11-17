import { Login } from "../../pages/Login/Login";
import { PadelMatches } from "../../pages/PadelMatches/PadelMatches";
import { URL } from "./API";

export const loginUser = async (e) => {
    e.preventDefault();

    const user = {
        email: e.target[0].value,
        password: e.target[1].value
    };
    console.log("user data =>", user);

    try {
        //todo proceso carga

        const res = await fetch(URL + "/users/login", {
            headers: { "Content-Type": "application/json" },
            method: "POST",
            body: JSON.stringify(user)
        });
        console.log("res FETCH =>", res);
        
        //todo quito pelota
        
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
            //     PadelMatches();
            // }, 3000);
        }

        // return data;
    } catch (error) {
        console.log("Error en el login del usuario: ", error);
        alert(`Error en el login: ${error.message}`);
    }
};
