import { Loader } from "../components/Loader/Loader";
import { Logout } from "../pages/Logout/Logout";
import { randomMessageError } from "./RandomMessageError";

export const confirmationToLogout = ({ parentElement, message }) => {
    parentElement.innerHTML = `
                    <h2>¿Seguro que quieres ${message}?</h2>
            <button class='btn-logout-yes'><img class="img-logout-yes" src="/assets/salir.png">Sí<img/></button>
            <button class='btn-logout-no'><img class="img-logout-no" src="/assets/back.png">No<img/></button>`;

    const yes = parentElement.querySelector(".btn-logout-yes");
    const no = parentElement.querySelector(".btn-logout-no");

    yes.addEventListener("click", () => {
        yes.disabled = true;
        no.disabled = true;
        randomMessageError(parentElement, "Cerrando Sesión...");
        Loader(parentElement);
        setTimeout(() => {
            window.history.pushState("", "", "/home");
            localStorage.clear(); // USO EL CLEAR DESDE EL MAIN.JS
            window.location.reload();
        }, 1000);
    });

    no.addEventListener("click", () => {
        Logout();
    });
};
