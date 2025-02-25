import "./Modal.css";
import { dateFormat } from "../../utils/DateFormatted";
import { buttonJoin } from "./ButtonJoin";
import { buttonClose } from "./ButtonClose";

export const modal = (parentElement, data, user) => {
    const isFull = data.players.length === 4;
    const isUserJoined = data.players.some((player) => player.userId === user._id);
    const dateFormatted = dateFormat(data.date);
    const playersList = data.players.length > 0 ? data.players.map((player) => player.userName).join("<br></br>") : "Ninguno";

    parentElement.innerHTML = `
                <div class="modal-container">
                <h3 class="modal-title">${data.title}</h3>
                <img class="modal-img" src=${data.image} alt="image padel match">
                <div class="modal-description-container">
                <p class="modal-date"><img class="modal-date-img" src="/assets/date.webp" alt="image date"><strong>Fecha:</strong> ${dateFormatted}</p>
                <p class="modal-location"><img class="modal-location-img" src="/assets/location.webp" alt="image location"><strong>Lugar:</strong> ${data.location}</p>
                <p class="modal-place"><strong>Pista:</strong> ${data.place}</p>
                <p class="modal-author"><strong>Creador:</strong> ${data.author?.name}</p>
                </div>
                <button class="join-btn" 
                padelMatch-id="${data._id}">
                ${
                    isFull && !isUserJoined
                        ? `<img class="completed-btn-img" src="/assets/full.webp" alt="padel match complete">PARTIDO COMPLETADO<img/>`
                        : isUserJoined
                        ? `<img class="removed-btn-img" src="/assets/removeUser.webp" alt="remove user">RETIRARSE<img/>`
                        : `<img class="joined-btn-img" src="/assets/joinUser.webp" alt="join user">UNIRSE<img/>`
                }
                </button>
                <p class="modal-players" data-type="assistants"><img class="modal-players-img" src="/assets/assistants.webp" alt="assistants padel match"><strong>Asistentes ${
                    data.players.length
                } / 4 :</strong></p>
                <p class="modal-players-list" data-type="assistants">${playersList}</p>
                <img class="close-btn" src="./assets/close.webp" alt="close modal"></img>
                </div>
                `;

    buttonJoin(parentElement, data);
    buttonClose(parentElement);
};
