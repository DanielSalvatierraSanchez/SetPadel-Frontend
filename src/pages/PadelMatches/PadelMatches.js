import "./PadelMatches.css";
import { createPage } from "../../functions/CreatePage";
import { getPadelMatches } from "../../utils/API/GetPadelMatches";
import { getToken, isAuth } from "../../utils/isAuth";

export const PadelMatches = async () => {
    const div = createPage("PadelMatches");
    div.innerHTML = `<h1>Partidos de Padel</h1>`;

    getToken()
    const allPadelMatches = await getPadelMatches();
    const padelMatchContainer = document.createElement("div");
    padelMatchContainer.classList.add("padel-match-container");

    if (!getToken()) {
        isAuth(div)
        return;
    }

    allPadelMatches.allPadelMatches.forEach((padelMatch) => {
        const padelMatchCard = document.createElement("div");
        padelMatchCard.classList.add("padel-match-card");
        padelMatchCard.innerHTML = `
            <h2>${padelMatch.title}</h2>
            <img src=${padelMatch.image}>
            <p>Fecha: ${padelMatch.day} de ${padelMatch.month}</p>
            <p>Hora: ${padelMatch.hour}</p>
            <p>Lugar: ${padelMatch.location}</p>
            <p>Pista: ${padelMatch.place}</p>
            `;
        padelMatchContainer.append(padelMatchCard);
        div.append(padelMatchContainer);
    });

    return div;
};
