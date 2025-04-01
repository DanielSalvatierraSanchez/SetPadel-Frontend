import "./PadelMatches.css";
import { getPadelMatches } from "../../utils/API/GetPadelMatches";
import { isAuth } from "../../utils/IsAuth";
import { Loader } from "../../components/Loader/Loader";
import { randomMessageError } from "../../utils/RandomMessageError";
import { FilterPadelMatches } from "../../components/Filters/FilterPadelMatches/FilterPadelMatches";
import { CardOfPadelMatch } from "../../components/CardOfPadelMatch/CardOfPadelMatch";
import { createPage } from "../../functions/CreatePage";

export const PadelMatches = async () => {
    const div = createPage("PadelMatches");
    div.classList.add("padel-matches");
    div.innerHTML = `<h1>Partidos de Padel</h1>`;

    isAuth();

    try {
        const allPadelMatch = await getPadelMatches();
        const { allPadelMatches } = allPadelMatch;

        const padelMatchContainer = document.createElement("div");
        padelMatchContainer.classList.add("padel-match-container");

        FilterPadelMatches(div, padelMatchContainer);
        Loader(div);
        ("");

        if (!allPadelMatches || allPadelMatches.length === 0) {
            randomMessageError(div, "No hay ningún partido programado.");
            return;
        }

        CardOfPadelMatch(padelMatchContainer, allPadelMatches);

        div.append(padelMatchContainer);
    } catch (error) {
        console.log("Error en la PAGE => PADEL MATCHES del front: ", error.message);
    }
    return div;
};
