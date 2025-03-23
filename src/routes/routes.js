import { Logout } from "../pages/Logout/Logout";
import { CreatePadelMatch } from "../pages/CreatePadelMatch/CreatePadelMatch";
import { Home } from "../pages/Home/Home";
import { PadelMatches } from "../pages/PadelMatches/PadelMatches";

const user = JSON.parse(localStorage.getItem("user"));
// const userImage = document.createElement("img");
// userImage.src = user.image;
// userImage.alt = "Imagen del Usuario";
// console.log(user);
// console.log(user.image);

export const routes = [
    {
        path: "/home",
        title: "Home",
        page: Home,
        id: "home"
    },
    {
        path: "/padel_matches",
        title: "Partidos de Padel",
        page: PadelMatches,
        id: "padel-matches"
    },
    {
        path: "/create_padel_match",
        title: "Crea un partido",
        page: CreatePadelMatch,
        id: "create-padel-match"
    },
    {
        path: "/logout",
        title: "userImage",
        page: Logout,
        id: "logout"
    }
];
