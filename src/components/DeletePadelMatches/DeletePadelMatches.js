import { createPage } from "../../functions/CreatePage";
import { deletePadelMatch } from "../../utils/API/DeletePadelMatch";
import { getPadelMatchesByAuthor } from "../../utils/API/GetPadelMatchesByAuthor";
import { isAuth } from "../../utils/isAuth";
import { randomMessageError } from "../../utils/RandomMessageError";
import { CardOfPadelMatch } from "../CardOfPadelMatch/CardOfPadelMatch";
import { Loader } from "../Loader/Loader";
import { errorMessage } from "../Messages/Error/ErrorMessage";
import "./DeletePadelMatches.css";

export const DeletePadelMatches = async () => {
    const div = createPage("DeletePadelMatches");
    div.classList.add("delete-padel-matches");
    div.innerHTML = `<h1>Mis Partidos</h1>`;

    isAuth(div);
    try {
        const padelMatchesByAuthor = await getPadelMatchesByAuthor();
        const { padelMatches } = padelMatchesByAuthor;

        const padelMatchContainer = document.createElement("div");
        padelMatchContainer.classList.add("padel-match-container");

        if (!padelMatches || padelMatches.length === 0) {
            randomMessageError(div, "No hay ningún partido programado.");
            Loader(div);
            return;
        }

        CardOfPadelMatch(padelMatchContainer, padelMatches);
        console.log("padelMatches => ", padelMatches);
        div.append(padelMatchContainer);
        // const myDeletePadelMatches = await deletePadelMatch();
        // console.log(myDeletePadelMatches);
    } catch (error) {
        console.log("Error en DELETE PADEL MATCHES del front: ", error.message);
    }
    return div;
};
