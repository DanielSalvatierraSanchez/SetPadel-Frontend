import { createPage } from "../../functions/CreatePage";
import { Button } from "../../components/Button/Button";
import "./Logout.css";
import { Profile } from "../../components/Profile/Profile";
import { confirmationOfLogout } from "../../utils/ConfirmationOfLogout";

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
                confirmationOfLogout({
                    parentElement: profileContainer,
                    message: "cerrar sesión"
                });
            },
            className: "btn-logout"
        })
    );
    div.append(profileContainer);
    return div;
};
