import { navigate } from "../../functions/navigate";
import { Home } from "../../pages/Home/Home";
import { routes } from "../../routes/routes";

import "./Header.css";

export const Header = () => {
    const header = document.createElement("header");
    const nav = document.createElement("nav");
    // const ul = document.createElement("ul");

    if (localStorage.getItem("token") === undefined && localStorage.getItem("token") === null) {
        Home();
    } else {
        for (const route of routes) {
            // const li = document.createElement("li");
            const a = document.createElement("a");
            a.textContent = route.title;
            a.href = route.path;
            a.addEventListener("click", (e) => {
                navigate(e, route);
            });
            nav.append(a);
            // li.append(a);
            // ul.append(li);
            // CREAREMOS UN LOGOUT
            // if (localStorage.getItem("token")) {
            //     const a = document.createElement("a");
            //     a.textContent = "Logout";
            //     a.href = "/logout";
            //     a.addEventListener("click", () => {
            //         localStorage.removeItem("token");
            //         window.location.reload();
            //     });
            //     nav.append(a);
            // }
        }
        // nav.append(ul);
        header.append(nav);
        document.body.append(header);
    }
};
