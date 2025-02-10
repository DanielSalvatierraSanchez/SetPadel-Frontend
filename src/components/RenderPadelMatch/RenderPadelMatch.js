import { dateFormat } from "../../utils/DateFormatted";
import "./RenderPadelMatch.css"

export const renderPadelMatch = (match) => {
            const padelMatchCard = document.createElement("div");
            padelMatchCard.classList.add("padel-match-card");

            const dateFormatted = dateFormat(match.date);

            padelMatchCard.innerHTML = `
            <p><strong>Fecha:</strong> ${dateFormatted}</p>
            <p><strong>Asistentes:</strong> ${match.players.length === 4 ? "PARTIDO COMPLETO" : match.players.length / 1}</p>
            `;
}