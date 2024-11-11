import { CreatePadelMatch } from "../pages/CreatePadelMatch/CreatePadelMatch";
import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Login/Login";
import { PadelMatches } from "../pages/PadelMatches/PadelMatches";

export const routes = [
    {
        path: "/home",
        title: "Home",
        page: Home
    },
    {
        path: "/padel-matches",
        title: "Partidos de Padel",
        page: PadelMatches
    },
    {
        path: "/create-padel-match",
        title: "Crea un partido",
        page: CreatePadelMatch
    },
    {
        path: "/login",
        title: "Login",
        page: Login
    }
];
