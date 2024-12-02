import { createPage } from "../../functions/CreatePage";
import { Home } from "../../pages/Home/Home";
import { Button } from "../Button/Button";
import { Loader } from "../Loader/Loader";
import "./Logout.css";

export const Logout = () => {
    const div = createPage("Logout");

    const profileContainer = document.createElement("div");
    profileContainer.classList.add("logout-container");
    profileContainer.innerHTML = `<h1>Perfíl de Usuario</h1>`;

    div.append(
        profileContainer,
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
                // window.history.pushState("", "", "/home");
                // e.preventDefault();
                setTimeout(() => {
                    localStorage.clear();
                    window.location.reload();
                }, 1500);
                //localStorage.removeItem("user");
            },
            className: "btn-logout"
        })
    );
    return div;
};
