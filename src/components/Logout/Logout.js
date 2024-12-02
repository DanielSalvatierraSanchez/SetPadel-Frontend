import { createPage } from "../../functions/CreatePage";
import { Home } from "../../pages/Home/Home";
import { Button } from "../Button/Button";
import "./Logout.css";

export const Logout = () => {
    const div = createPage("Logout");

    const profileContainer = document.createElement("div");
    profileContainer.classList.add("logout-container");
    profileContainer.innerHTML = `<h1>Perfíl de Usuario</h1>`
    
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
            fnc: (e) => {
                window.history.pushState("", "", "/home");
                // const button = document.querySelector(".btn-logout");
                // button.addEventListener("click", (e) => {
                    e.preventDefault();
                    localStorage.removeItem("token");
                    localStorage.removeItem("user");
                    window.location.reload();
                // });
            },
            className: "btn-logout"
        })
    );
    return div;
};
