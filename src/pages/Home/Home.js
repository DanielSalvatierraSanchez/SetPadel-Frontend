import { Button } from "../../components/Button/Button";
import { createPage } from "../../functions/createPage";
import { Login } from "../Login/login";
import "./Home.css";

export const Home = () => {
    const div = createPage("Home");
    const homeContainer = document.createElement("div");
    homeContainer.classList.add("home-container");
    homeContainer.innerHTML = `
    <h1>Bienvenido a APPADEL</h1>
    <br/>
    <p>La APP de gestión de partidos de padel, donde podrás crear y encontrar partidos donde poder apuntarte a ellos.</p>
    `;
    div.append(
        homeContainer,
        Button({
            text: "Registrate o Haz Login",
            fnc: () => {
                window.history.pushState("", "", "/login");
                Login();
            },
            className: "btn-home-login"
        })
    );
};
