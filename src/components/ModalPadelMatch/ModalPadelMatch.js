import { dateFormat } from "../../utils/DateFormatted";
import "./ModalPadelMatch.css";

export const modalPadelMatch = (parentElement, data) => {
    const padelMatchCard = document.getElementsByTagName(`${parentElement}`);
    const padelMatchModal = document.createElement("section");
    padelMatchModal.classList.add("modal");
    padelMatchModal.classList.add("modal-show");
        const isFull = data.players.length === 4;
        const dateFormatted = dateFormat(data.date);
    padelMatchModal.innerHTML = `
        <div class="modal__container">
        <h3 class="modal__title">${data.title}</h3>
        <img class="modal__img" src=${data.image}>
        <p class="modal__date">Fecha: ${dateFormatted}</p>
        <p class="modal__location">Lugar: ${data.location}</p>
        <p class="modal__place">Pista: ${data.place}</p>
        <p class="modal__author">Creador: ${data.author?.name}</p>
        <button class="join-btn" padelMatch-id="${data._id}" ${isFull ? "disabled" : ""}>
        <img class="join-btn-img" src="/assets/player.png">
        ${isFull ? "PARTIDO COMPLETO" : "UNIRSE"}
        </button>
        <p class="modal__players" data-type="assistants">Asistentes: ${data.players.length || "Ninguno"}</p>
        <img class="close-btn" src="./assets/cerrar.png" />
        </div>
        `;

    // padelMatchCard.replaceWith(padelMatchModal);

    // const closeBtn = padelMatchModal.querySelector(".close-btn");
    // closeBtn.addEventListener("click", () => {
    //     padelMatchModal.classList.remove("modal-show");

    //     //padelMatchModal.replaceWith(padelMatchCard);

    //     //PadelMatches();
    // });

    // const joinBtn = padelMatchModal.querySelector(".join-btn");
    // joinBtn.addEventListener("click", async (e) => {
    //     e.stopPropagation();
    //     e.preventDefault();

    //     const padelMatchId = e.target.getAttribute("padelMatch-id");
    //     const userData = JSON.parse(localStorage.getItem("user"));

    //     padelMatch.players.push({ name: userData.name, _id: userData._id });

    //     await joinPadelMatch(padelMatchId);
    // });
};
