import { PostPadelMatch } from "../../components/PostPadelMatch/PostPadelMatchForm";
import { createPage } from "../../functions/CreatePage";
import { getPadelMatches } from "../../utils/API/GetPadelMatches";
import "./PadelMatches.css";

export const PadelMatches = () => {
    const div = createPage("PadelMatches");
    div.innerHTML = "<h1>Partidos creados</h1>";

    getPadelMatches();
};
