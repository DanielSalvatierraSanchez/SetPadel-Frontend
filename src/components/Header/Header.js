import "./Header.css";
import { navigate } from "../../functions/navigate";
import { Home } from "../../pages/Home/Home";
import { routes } from "../../routes/routes";

export const Header = () => {
    const header = document.createElement("header");
    const nav = document.createElement("nav");

    if (localStorage.getItem("token")) {
        Home();
    } else {
        for (const route of routes) {
            const a = document.createElement("a");
            a.textContent = route.title;
            a.href = route.path;
            a.addEventListener("click", (e) => {
                navigate(e, route);
            });
            nav.append(a);
            // CREAREMOS UN LOGOUT
        }

        header.append(nav);
        document.body.append(header);
    }
};
