import { dateFormat } from "../../utils/DateFormatted";
import "./Modal.css";

export const modal = (parentElement, data, user) => {
    const isFull = data.players.length === 4;
    const isUserJoined = data.players.some((player) => player === user.name);
    const dateFormatted = dateFormat(data.date);
    const playersList = data.players.length > 0 ? data.players.map((player) => player.userName).join(", ") : "Ninguno";

    parentElement.innerHTML = `
                <div class="modal-container">
                <h3 class="modal-title">${data.title}</h3>
                <img class="modal-img" src=${data.image}>
                <p class="modal-date">Fecha: ${dateFormatted}</p>
                <p class="modal-location">Lugar: ${data.location}</p>
                <p class="modal-place">Pista: ${data.place}</p>
                <p class="modal-author">Creador: ${data.author?.name}</p>
                <button class="join-btn" 
                padelMatch-id="${data._id}" ${isFull && !isUserJoined ? "disabled" : ""}>
                <img class="join-btn-img" src="/assets/player.png">
                ${isFull && !isUserJoined ? "PARTIDO COMPLETO" : isUserJoined ? "RETIRARSE" : "UNIRSE"}
                </button>
                <p class="modal-players" data-type="assistants">Asistentes ${data.players.length}/4:</p>
                <p class="modal-players-list" data-type="assistants">${playersList}</p>
                <img class="close-btn" src="./assets/cerrar.png" />
                </div>
                `;
};
