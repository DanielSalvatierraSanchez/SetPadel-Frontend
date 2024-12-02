import { createPage } from "../../functions/CreatePage";
import { Button } from "../Button/Button";
import { Loader } from "../Loader/Loader";
import "./Logout.css";

export const Logout = () => {
    const div = createPage("Logout");

    const profileContainer = document.createElement("div");
    profileContainer.classList.add("logout-container");
    profileContainer.innerHTML = `<h1>Perfíl de Usuario</h1>`;

    profileContainer.append(
        Button({
            text: "Actualizar Perfíl",
            fnc: () => {
                window.history.pushState("", "", "/update_profile");
                //todo ejecutar formulario para actualizar user
            },
            className: "btn-update-profile"
        }),
        Button({
            text: "Cerrar Sesión",
            fnc: () => {
                Loader(profileContainer);
                // e.preventDefault();
                setTimeout(() => {
                    window.history.pushState("", "", "/home");
                    localStorage.clear();
                    window.location.reload();
                }, 1000);
            },
            className: "btn-logout"
        })
    );
    div.append(profileContainer);
    return div;
};
