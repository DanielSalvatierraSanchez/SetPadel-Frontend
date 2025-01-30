import { Button } from "../../components/Button/Button";
import { createPage } from "../../functions/CreatePage";
import { Login } from "../Login/Login";
import { Register } from "../Register/Register";
import "./Home.css";

export const Home = () => {
    const div = createPage("Home");

    const homeContainer = document.createElement("div");
    homeContainer.classList.add("home-container");
    homeContainer.innerHTML = `
    <h1>Bienvenido a APPADEL</h1>
    <br/>
    <h2>La App donde podrás gestionar tus partidos de padel.</h2>
    `;
    // <h3>La APP de gestión de partidos de padel, donde podrás crear y encontrar partidos donde poder apuntarte a ellos.</h3>

    div.append(
        homeContainer,
        Button({
            text: "Iniciar Sesión",
            fnc: () => {
                window.history.pushState("", "", "/login");
                Login();
            },
            className: "btn-home-login"
        }),
        Button({
            text: "Registrate en Appadel",
            fnc: () => {
                window.history.pushState("", "", "/register");
                Register();
            },
            className: "btn-home-register"
        })
    );
};
