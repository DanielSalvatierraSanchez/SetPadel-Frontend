import { createPage } from "../../functions/CreatePage";
import { Button } from "../../components/Button/Button";
import { Loader } from "../../components/Loader/Loader";
import "./Logout.css";
import { Profile } from "../../components/Profile/Profile";
import { PadelMatches } from "../PadelMatches/PadelMatches";
import { randomMessageError } from "../../utils/RandomMessageError";

export const Logout = () => {
    const div = createPage("Logout");

    const profileContainer = document.createElement("div");
    profileContainer.classList.add("logout-container");
    profileContainer.innerHTML = `<h1>Perfíl de Usuario</h1>`;

    profileContainer.append(
        Button({
            text: "Actualizar Perfíl",
            fnc: () => {
                window.history.pushState("", "", "/profile");
                Profile();
            },
            className: "btn-update-profile"
        }),
        Button({
            text: "Cerrar Sesión",
            fnc: () => {
                profileContainer.innerHTML = `
                <h2>¿Seguro que quieres cerrar sesión?</h2>
                <button class='btn-logout-yes'>Sí</button>
                <button class='btn-logout-no'>No</button>`;
                const yes = profileContainer.querySelector(".btn-logout-yes")
                const no = profileContainer.querySelector(".btn-logout-no")
                yes.addEventListener("click", () => {
                    Loader(profileContainer);
                    randomMessageError(profileContainer, "Cerrando Sesión...");
                    setTimeout(() => {
                        window.history.pushState("", "", "/home");
                        localStorage.clear(); // USO EL CLEAR DESDE EL MAIN.JS
                        window.location.reload();
                    }, 1000);
                })
                no.addEventListener("click", () => {
                    Loader(profileContainer);
                    randomMessageError(profileContainer, "Cargando partidos...");
                    setTimeout(() => {
                        window.history.pushState("", "", "/padel_matches");
                        PadelMatches();
                    }, 1000);
                })
            },
            className: "btn-logout"
        })
    );
    div.append(profileContainer);
    return div;
};
