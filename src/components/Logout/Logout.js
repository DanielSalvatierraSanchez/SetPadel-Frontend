import { createLinkLogout } from "../../functions/CreateLinkLogout";
import "./Logout.css";

export const Logout = () => {
    const nav = document.querySelector("nav");
    createLinkLogout(nav);
};
