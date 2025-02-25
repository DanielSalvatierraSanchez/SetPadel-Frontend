import "./PadelMatches.css";
import { createPage } from "../../functions/CreatePage";
import { getPadelMatches } from "../../utils/API/GetPadelMatches";
import { isAuth } from "../../utils/isAuth";
import { Loader } from "../../components/Loader/Loader";
import { randomMessageError } from "../../utils/RandomMessageError";
import { dateFormat } from "../../utils/DateFormatted";
import { modal } from "../../components/Modal/Modal";
import { FilterPadelMatches } from "../../components/FilterPadelMatches/FilterPadelMatches";
import { FilterResults } from "../../components/FilterResults/FilterResults";

export const PadelMatches = async () => {
    const div = createPage("PadelMatches");
    div.classList.add("padel-matches");
    div.innerHTML = `<h1>Partidos de Padel</h1>`;

    isAuth(div);
    Loader(div);

    try {
        const padelMatchContainer = document.createElement("div");
        padelMatchContainer.classList.add("padel-match-container");

        const allPadelMatch = await getPadelMatches();
        const { allPadelMatches } = allPadelMatch;

        FilterPadelMatches(div, "filter-input", "number", "1 a 31", "filter-btn", "Filtrar");

        if (!allPadelMatches || allPadelMatches.length === 0) {
            randomMessageError(div, "No hay ningún partido programado.");
            return;
        }

        const userData = JSON.parse(localStorage.getItem("user"));

        allPadelMatches.sort((a, b) => new Date(a.date) - new Date(b.date));

        FilterResults(padelMatchContainer, allPadelMatches)

        allPadelMatches.forEach((padelMatch) => {
            const dateFormatted = dateFormat(padelMatch.date);
            const padelMatchCard = document.createElement("div");
            padelMatchCard.classList.add("padel-match-card");
            padelMatchCard.innerHTML = `
            <p class="card-date"><img class="card-date-img" src="/assets/date.webp" alt="image date"><strong>Fecha:</strong> ${dateFormatted}</p>
            <p class="card-players"><img class="card-players-img" src="/assets/assistants.webp" alt="assistants padel match"><strong>Asistentes:</strong> ${
                padelMatch.players.length === 4 ? "COMPLETO" : padelMatch.players.length / 1
            }</p>
            `;

            padelMatchContainer.append(padelMatchCard);

            padelMatchCard.addEventListener("click", (e) => {
                e.preventDefault();

                const existingModal = document.querySelector(".modal");
                if (existingModal) {
                    existingModal.remove();
                }

                const padelMatchModal = document.createElement("div");
                padelMatchModal.classList.add("modal");

                modal(padelMatchModal, padelMatch, userData);

                padelMatchCard.append(padelMatchModal);
            });

            div.append(padelMatchContainer);
        });
    } catch (error) {
        console.log("Error en la PAGE => PADEL MATCHES del front: ", error.message);
    }
    return div;
};
