import { dateFormat } from "../../utils/DateFormatted";
import { errorMessage } from "../Messages/Error/ErrorMessage";
import "./FilterResults.css";

export const FilterResults = (container, padelMatches) => {
    container.innerHTML = "";

    if (padelMatches.length === 0) {
        errorMessage(container, "No hay partidos para este día")
        // const noMatchesMsg = document.createElement("p");
        // noMatchesMsg.classList.add("no-matches-msg");
        // noMatchesMsg.textContent = "No hay partidos para este día";
        // padelMatchContainer.appendChild(noMatchesMsg);
        return;
    }

    padelMatches.forEach((padelMatch) => {
        const dateFormatted = dateFormat(padelMatch.date);
        const padelMatchCard = document.createElement("div");
        padelMatchCard.classList.add("padel-match-card");
        padelMatchCard.innerHTML = `
                    <p class="card-date"><img class="card-date-img" src="/assets/date.webp" alt="image date"><strong>Fecha:</strong> ${dateFormatted}</p>
                    <p class="card-players"><img class="card-players-img" src="/assets/assistants.webp" alt="assistants padel match"><strong>Asistentes:</strong> ${
                        padelMatch.players.length === 4 ? "COMPLETO" : padelMatch.players.length / 1
                    }</p>
                    `;

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

        padelMatchContainer.append(padelMatchCard);
    });
};
