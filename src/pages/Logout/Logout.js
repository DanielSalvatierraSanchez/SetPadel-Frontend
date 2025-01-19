import { createPage } from "../../functions/CreatePage";
import { Button } from "../../components/Button/Button";
import { Loader } from "../../components/Loader/Loader";
import "./Logout.css";
import { Profile } from "../../components/Profile/Profile";

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
                console.log("Actualizar Perfíl");
                Profile()
                //todo ejecutar formulario para actualizar user
            },
            className: "btn-update-profile"
        }),
        Button({
            text: "Cerrar Sesión",
            fnc: () => {
                Loader(profileContainer);
                setTimeout(() => {
                    window.history.pushState("", "", "/home");
                    localStorage.clear(); // USO EL CLEAR DESDE EL MAIN.JS
                    window.location.reload();
                }, 1000);
            },
            className: "btn-logout"
        })
    );
    div.append(profileContainer);
    return div;
};
