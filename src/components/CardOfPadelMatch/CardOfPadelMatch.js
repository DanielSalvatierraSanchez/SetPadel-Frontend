import { dateFormat } from "../../utils/DateFormatted";
import { modal } from "../Modal/Modal";

export const CardOfPadelMatch = (parentElement, padelMatches) => {
    const userData = JSON.parse(localStorage.getItem("user"));

    padelMatches.sort((a, b) => new Date(a.date) - new Date(b.date));

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

        parentElement.append(padelMatchCard);

        padelMatchCard.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            const existingModal = document.querySelector(".modal");
            if (existingModal) {
                existingModal.remove();
            }
            modal(padelMatchCard, padelMatch, userData);
        });
    });
};
