import "./Logout.css";
import { Button } from "../../components/Button/Button";
import { buttonBack } from "../../components/ButtonBack/ButtonBack";
import { ConfirmUserLogout } from "../../components/Confirmations/ConfirmUserLogout/ConfirmUserLogout";
import { MyPadelMatches } from "../MyPadelMatches/MyPadelMatches";
import { Profile } from "../Profile/Profile";
import { createPage } from "../../functions/CreatePage";
import { isAuth } from "../../utils/IsAuth";

export const Logout = () => {
    const div = createPage("Logout");
    const profileContainer = document.createElement("div");
    profileContainer.classList.add("logout-container");
    profileContainer.innerHTML = `<h1 class="title-logout">Perfíl de Usuario</h1>`;

    isAuth();

    profileContainer.append(
        Button({
            text: "Actualizar Perfíl",
            fnc: () => {
                window.history.pushState("", "", "/update_profile");
                Profile();
            },
            className: "btn-update-profile-logout"
        }),
        Button({
            text: "Mis Partidos",
            fnc: () => {
                window.history.pushState("", "", "/my_padel_matches");
                MyPadelMatches();
            },
            className: "btn-my-padel-matches-logout"
        }),
        Button({
            text: "Cerrar Sesión",
            fnc: () => {
                ConfirmUserLogout({
                    parentElement: profileContainer,
                    message: "cerrar sesión"
                });
            },
            className: "btn-logout-logout"
        })
    );
    buttonBack(profileContainer);
    div.append(profileContainer);
    return div;
};
