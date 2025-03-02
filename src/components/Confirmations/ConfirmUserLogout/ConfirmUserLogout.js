import "./ConfirmUserLogout.css";
import { Logout } from "../../../pages/Logout/Logout";
import { randomMessageError } from "../../../utils/RandomMessageError";
import { Loader } from "../../Loader/Loader";

export const ConfirmUserLogout = ({ parentElement, message }) => {
    parentElement.innerHTML = `
        <h2 class"title-user-logout">¿Seguro que quieres ${message}?</h2>
        <button class='btn-logout-yes'><img class="img-btn-logout-yes" src="/assets/exit.webp" alt="logout">Sí<img/></button>
        <button class='btn-logout-no'><img class="img-btn-logout-no" src="/assets/back.webp" alt="return">No<img/></button>`;

    const yes = parentElement.querySelector(".btn-logout-yes");
    const no = parentElement.querySelector(".btn-logout-no");

    yes.addEventListener("click", () => {
        yes.disabled = true;
        no.disabled = true;
        randomMessageError(parentElement, "Cerrando Sesión...");
        Loader(parentElement);
        setTimeout(() => {
            window.history.pushState("", "", "/home");
            localStorage.clear();
            window.location.reload();
        }, 1000);
    });

    no.addEventListener("click", () => {
        Logout();
    });
};
