import { dateFormat } from "../../utils/DateFormatted";
import "./Modal.css";

export const modal = (parentElement, data, user) => {
    const isFull = data.players.length === 4;
    const dateFormatted = dateFormat(data.date);
    const isUserJoined = data.players.some(player => player._id === user._id);

    const playersList =
        data.players.length > 0
            ? data.players.map((player) => player).join(", ")
            : "Ninguno";

    parentElement.innerHTML = `
                <div class="modal__container">
                <h3 class="modal__title">${data.title}</h3>
                <img class="modal__img" src=${data.image}>
                <p class="modal__date">Fecha: ${dateFormatted}</p>
                <p class="modal__location">Lugar: ${data.location}</p>
                <p class="modal__place">Pista: ${data.place}</p>
                <p class="modal__author">Creador: ${data.author?.name}</p>
                <button class="join-btn" padelMatch-id="${data._id}" ${
        isFull && !isUserJoined ? "disabled" : ""
    }>
                <img class="join-btn-img" src="/assets/player.png">
                ${isFull && !isUserJoined ? "PARTIDO COMPLETO" : isUserJoined ? "RETIRARSE" : "UNIRSE"}
                </button>
                <p class="modal__players" data-type="assistants">Asistentes ${
                    data.players.length
                }/4: ${playersList}</p>
                <img class="close-btn" src="./assets/cerrar.png" />
                </div>
                `;
};
