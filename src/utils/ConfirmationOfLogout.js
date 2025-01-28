import { Loader } from "../components/Loader/Loader";
import { PadelMatches } from "../pages/PadelMatches/PadelMatches";
import { randomMessageError } from "./RandomMessageError";

export const confirmationOfLogout = ({ parentElement, message }) => {
    parentElement.innerHTML = `
                    <h2>¿Seguro que quieres ${message}?</h2>
                    <button class='btn-logout-yes'>Sí</button>
                    <button class='btn-logout-no'>No</button>`;
    const yes = parentElement.querySelector(".btn-logout-yes");
    const no = parentElement.querySelector(".btn-logout-no");
    yes.addEventListener("click", () => {
        Loader(parentElement);
        randomMessageError(parentElement, "Cerrando Sesión...");
        setTimeout(() => {
            window.history.pushState("", "", "/home");
            localStorage.clear(); // USO EL CLEAR DESDE EL MAIN.JS
            window.location.reload();
        }, 1000);
    });
    no.addEventListener("click", () => {
        Loader(parentElement);
        randomMessageError(parentElement, "Cargando partidos...");
        setTimeout(() => {
            window.history.pushState("", "", "/padel_matches");
            PadelMatches();
        }, 2000);
    });
};
