import { Logout } from "../pages/Logout/Logout";
import { CreatePadelMatch } from "../pages/CreatePadelMatch/CreatePadelMatch";
import { Home } from "../pages/Home/Home";
import { PadelMatches } from "../pages/PadelMatches/PadelMatches";

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
        title: "Perfíl / Cerrar Sesión",
        page: Logout,
        id: "logout"
    }
];
