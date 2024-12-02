import "./Header.css";
import { navigate } from "../../functions/navigate";
import { routes } from "../../routes/routes";

export const Header = () => {
    const existingHeader = document.querySelector("header");
    if (existingHeader) {
        existingHeader.remove();
    }

    const header = document.createElement("header");
    const nav = document.createElement("nav");
    const ul = document.createElement("ul");
    const li = document.createElement("li");

    //todo crear filtro de rutas con condicional y despues hacer el bucle del filtro
    const isAuth = !!localStorage.getItem("token");
    const filterRoutes = isAuth ? routes.filter((route) => route.id !== "home") : routes.filter((route) => route.id !== "logout");

    for (const route of filterRoutes) {
        const a = document.createElement("a");
        a.textContent = route.title;
        a.href = route.path;
        a.addEventListener("click", (e) => {
            e.preventDefault();
            navigate(e, route);
        });
        nav.append(ul);
        ul.append(li);
        li.append(a);
    }
    // if (isAuth) {
    //     createLinkLogout(nav);
    // }

    header.append(nav);
    document.body.prepend(header);
};
