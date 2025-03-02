import { createPage } from "../../functions/CreatePage";
import { getPadelMatchesByAuthor } from "../../utils/API/GetPadelMatchesByAuthor";
import { isAuth } from "../../utils/isAuth";
import { randomMessageError } from "../../utils/RandomMessageError";
import { CardOfPadelMatch } from "../../components/CardOfPadelMatch/CardOfPadelMatch";
import { Loader } from "../../components/Loader/Loader";
import "./MyPadelMatches.css";

export const MyPadelMatches = async () => {
    const div = createPage("MyPadelMatches");
    div.classList.add("my-padel-matches");
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

        Loader(div);
        CardOfPadelMatch(padelMatchContainer, padelMatches);

        div.append(padelMatchContainer);
    } catch (error) {
        console.log("Error en MY PADEL MATCHES del front: ", error.message);
    }
    return div;
};
