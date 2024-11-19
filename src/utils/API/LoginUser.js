import { errorMessage } from "../../components/Messages/Error/ErrorMessage";
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

        const res = await API({ endpoint: "/users/login", method: "POST" })
        
        // const res = await fetch(URL + "/users/login", {
        //     headers: { "Content-Type": "application/json" },
        //     method: "POST",
        //     body: JSON.stringify(user)
        // });
        console.log("res FETCH =>", res);
        //         const res = await API({ endpoint: "/users/register", method: "POST", isJSON: false, body: formData });

        //todo quito pelota

        // const response = await res.json();
        // console.log("FINAL FELIZ response !!!", response);

        if (res) {
            localStorage.setItem("token", res.token);

            const form = document.querySelector("form");

            let removeError = form.querySelector(".success-message");
            if (removeError) {
                removeError.remove();
            }

            const successMessage = document.createElement("p");
            successMessage.classList.add("success-message");
            successMessage.textContent = res.message;

            const p = document.createElement("p");
            p.textContent = "CARGANDO PARTIDOS...";
            form.append(successMessage, p);

            setTimeout(() => {
                PadelMatches();
            }, 2000);
        } else {
            errorMessage(res);
            // const form = document.querySelector("form");

            // let removeError = form.querySelector(".error-message");
            // if (removeError) {
            //     removeError.remove();
            // }
            // const errorMessage = document.createElement("p");
            // errorMessage.classList.add("error-message");
            // errorMessage.textContent = response.message;
            // form.append(errorMessage);

            // setTimeout(() => {
            //     PadelMatches();
            // }, 3000);
        }

        // return response;
    } catch (error) {
        console.log("Error en el login del usuario: ", error);
        alert(`Error en el login: ${error.message}`);
    }
};
