import "./Header.css";
import { navigate } from "../../functions/navigate";
import { routes } from "../../routes/routes";

export const Header = () => {
    const duplicateHeader = document.querySelector("header");
    if (duplicateHeader) {
        duplicateHeader.remove();
    }

    const header = document.createElement("header");
    const nav = document.createElement("nav");
    const ul = document.createElement("ul");

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
        });
        li.append(a);
        ul.append(li);
        nav.append(ul);
    }

    header.append(nav);
    document.body.prepend(header);
};
