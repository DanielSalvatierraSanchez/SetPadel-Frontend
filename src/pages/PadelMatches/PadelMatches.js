import "./PadelMatches.css";
import { createPage } from "../../functions/CreatePage";
import { getPadelMatches } from "../../utils/API/GetPadelMatches";
import { getToken, isAuth } from "../../utils/isAuth";
import { Loader } from "../../components/Loader/Loader";
import { joinPadelMatch } from "../../utils/API/JoinPadelMatch";
import { randomMessageError } from "../../utils/RandomMessageError";
import { dateFormat } from "../../utils/DateFormatted";
import { Button } from "../../components/Button/Button";

export const PadelMatches = async () => {
    const div = createPage("PadelMatches");
    div.classList.add("padel-matches");
    div.innerHTML = `<h1>Partidos de Padel</h1>`;

    const token = getToken();
    if (!token) {
        isAuth(div);
        return;
    }

    const allPadelMatch = await getPadelMatches();
    const { allPadelMatches } = allPadelMatch;

    const padelMatchContainer = document.createElement("div");
    padelMatchContainer.classList.add("padel-match-container");

    Loader(div);
    if (!allPadelMatches || allPadelMatches.length === 0) {
        randomMessageError(div, "❌ No hay ningún partido programado.");
        return;
    }

    allPadelMatches.forEach((padelMatch) => {
        const padelMatchCard = document.createElement("div");
        padelMatchCard.classList.add("padel-match-card");

        localStorage.setItem("allPadelMatches", JSON.stringify(allPadelMatches));

        const isFull = padelMatch.players.length === 4;
        const dateFormatted = dateFormat(padelMatch.date);

        // Vista inicial de la carta
        padelMatchCard.innerHTML = `
        <p>Fecha: ${dateFormatted}</p>
        <p>Asistentes: ${padelMatch.players.length}</p>
        `;

        padelMatchContainer.append(padelMatchCard);
        div.append(padelMatchContainer);

        padelMatchCard.addEventListener("click", () => {
            const padelMatchFull = document.createElement("div");
            padelMatchFull.classList.add("padel-match-full");

            padelMatchFull.innerHTML = `
        <h3>${padelMatch.title}</h3>
        <img class="padel-match-card-image" src=${padelMatch.image}>
        <p>Fecha: ${dateFormatted}</p>
        <p>Lugar: ${padelMatch.location}</p>
        <p>Pista: ${padelMatch.place}</p>
        <p>Creador: ${padelMatch.author?.name}</p>
        <button class="join-btn" padelMatch-id="${padelMatch._id}" ${isFull ? "disabled" : ""}>
        <img src="/assets/player.png">
        ${isFull ? "PARTIDO COMPLETO" : "UNIRSE"}
        </button>
        <p data-type="assistants">Asistentes: ${padelMatch.players.length || "Ninguno"}</p>
        <img class="close-btn" src="./assets/cerrar.png" />
        `;

            padelMatchCard.replaceWith(padelMatchFull);

            const closeBtn = padelMatchFull.querySelector(".close-btn");
            closeBtn.addEventListener("click", () => {
                padelMatchFull.replaceWith(padelMatchCard);
            });

            const joinBtn = padelMatchFull.querySelector(".join-btn");
            joinBtn.addEventListener("click", async (e) => {
                e.stopPropagation();
                e.preventDefault();

                const padelMatchId = e.target.getAttribute("padelMatch-id");
                const userData = JSON.parse(localStorage.getItem("user"));

                padelMatch.players.push({ name: userData.name, _id: userData._id });

                await joinPadelMatch(padelMatchId);
            });
        });
    });

    return div;
};

