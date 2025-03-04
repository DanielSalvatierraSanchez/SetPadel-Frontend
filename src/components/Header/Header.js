import "./Header.css";
import { routes } from "../../routes/routes";
import { MenuBurger } from "../MenuBurguer/MenuBurguer";
import { navigate } from "../../functions/Navigate";

export const Header = () => {
    console.log("Estoy en Header");

    const duplicateHeader = document.querySelector("header");
    if (duplicateHeader) {
        duplicateHeader.remove();
    }

    const header = document.createElement("header");
    const nav = document.createElement("nav");
    const ul = document.createElement("ul");
    nav.className = "nav";
    ul.className = "ul";

    const isAuth = !!localStorage.getItem("token");

    const filterRoutes = isAuth ? routes.filter((route) => route.id !== "home") : routes.filter((route) => route.id === "home");

    for (const route of filterRoutes) {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.textContent = route.title;
        a.href = route.path;
        a.addEventListener("click", (e) => {
            e.preventDefault();
            navigate(e, route);
            nav.classList.remove("visible");
        });
        li.append(a);
        ul.append(li);
    }

    MenuBurger(header, nav);
    nav.append(ul);
    header.append(nav);
    document.body.prepend(header);
};
