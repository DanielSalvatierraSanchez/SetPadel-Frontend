import { Login } from "../../pages/Login/Login";
import { PadelMatches } from "../../pages/PadelMatches/PadelMatches";
import { URL } from "./API";

export const loginUser = async (e) => {
    e.preventDefault();

    const user = {
        email: e.target[0].value,
        password: e.target[1].value
    };
    console.log("User Data =>", user);

    try {
        const userJSON = JSON.stringify(user);

        const res = await fetch(URL + "/users/login", {
            headers: { "Content-Type": "application/json" },
            method: "POST",
            body: userJSON
        });
        console.log(res);

        const postLogin = await res.json();
        console.log("FINAL FELIZ =>", postLogin);

        localStorage.setItem("token", postLogin.token);
        // window.location.href = "/home";

        if (res.status !== 200) {
            const form = document.querySelector("form");
            let removeError = form.querySelector(".message-error");
            if (removeError) {
                removeError.remove();
            }
            const messageError = document.createElement("p");
            messageError.classList.add("message-error");
            messageError.textContent = postLogin.message;
            form.append(messageError);
            setTimeout(() => {
                Login();
            }, 2000);
        } else {
            const form = document.querySelector("form");
            let removeError = form.querySelector(".message-error");
            if (removeError) {
                removeError.remove();
            }
            const messageError = document.createElement("p");
            messageError.classList.add("message-error");
            messageError.textContent = postLogin.message;
            form.append(messageError);
            const p = document.createElement("p")
            p.textContent = "CARGANDO PARTIDOS..."
            form.append(p);
            setTimeout(() => {
                PadelMatches();
            }, 3000);
        }

        return postLogin;
    } catch (error) {
        console.log("Error en el login del usuario: ", error);
        alert(`Error en el login: ${error.message}`);
    }
};
