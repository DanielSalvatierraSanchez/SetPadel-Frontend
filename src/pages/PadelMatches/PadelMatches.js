import "./PadelMatches.css";
import { createPage } from "../../functions/CreatePage";
import { getPadelMatches } from "../../utils/API/GetPadelMatches";
import { getToken, isAuth } from "../../utils/isAuth";
import { Loader } from "../../components/Loader/Loader";
import { joinPadelMatch } from "../../utils/API/JoinPadelMatch";
import { randomMessageError } from "../../utils/RandomMessageError";
import { dateFormat } from "../../utils/DateFormatted";
import { Button } from "../../components/Button/Button";
import { modal } from "../../components/ModalPadelMatch/Modal";

export const PadelMatches = async () => {
    const div = createPage("PadelMatches");
    div.classList.add("padel-matches");
    div.innerHTML = `<h1>Partidos de Padel</h1>`;

    const token = getToken();
    if (!token) {
        isAuth(div);
        return;
    }

    Loader(div);

    const allPadelMatch = await getPadelMatches();
    const { allPadelMatches } = allPadelMatch;

    const padelMatchContainer = document.createElement("div");
    padelMatchContainer.classList.add("padel-match-container");

    if (!allPadelMatches || allPadelMatches.length === 0) {
        randomMessageError(div, "No hay ningún partido programado.");
        return;
    }

    allPadelMatches.forEach((padelMatch) => {
        const padelMatchCard = document.createElement("div");
        padelMatchCard.classList.add("padel-match-card");

        localStorage.setItem(
            "allPadelMatches",
            JSON.stringify(allPadelMatches)
        );

        // const isFull = padelMatch.players.length === 4;
        const dateFormatted = dateFormat(padelMatch.date);

        padelMatchCard.innerHTML = `
        <p>Fecha: ${dateFormatted}</p>
        <p>Asistentes: ${padelMatch.players.length}</p>
        `;

        padelMatchContainer.append(padelMatchCard);
        div.append(padelMatchContainer);

        padelMatchCard.addEventListener("click", (e) => {
            e.preventDefault();
            // const padelMatchModal = document.getElementsByClassName(".modal")
            // modalPadelMatch(padelMatchCard, padelMatch)
            const padelMatchModal = document.createElement("section");
            padelMatchModal.classList.add("modal");
            padelMatchModal.classList.add("modal-show");
            modal(padelMatchModal, padelMatch);
            // padelMatchModal.innerHTML = `
            //     <div class="modal__container">
            //     <h3 class="modal__title">${padelMatch.title}</h3>
            //     <img class="modal__img" src=${padelMatch.image}>
            //     <p class="modal__date">Fecha: ${dateFormatted}</p>
            //     <p class="modal__location">Lugar: ${padelMatch.location}</p>
            //     <p class="modal__place">Pista: ${padelMatch.place}</p>
            //     <p class="modal__author">Creador: ${padelMatch.author?.name}</p>
            //     <button class="join-btn" padelMatch-id="${padelMatch._id}" ${isFull ? "disabled" : ""}>
            //     <img class="join-btn-img" src="/assets/player.png">
            //     ${isFull ? "PARTIDO COMPLETO" : "UNIRSE"}
            //     </button>
            //     <p class="modal__players" data-type="assistants">Asistentes: ${padelMatch.players.length || "Ninguno"}</p>
            //     <img class="close-btn" src="./assets/cerrar.png" />
            //     </div>
            //     `;

            padelMatchCard.replaceWith(padelMatchModal);

            const closeBtn = padelMatchModal.querySelector(".close-btn");
            closeBtn.addEventListener("click", () => {
                padelMatchModal.classList.remove("modal-show");
                padelMatchModal.replaceWith(padelMatchCard);
                //PadelMatches();
            });

            const joinBtn = padelMatchModal.querySelector(".join-btn");
            joinBtn.addEventListener("click", async (e) => {
                e.preventDefault();
                e.stopPropagation();

                const padelMatchId = e.target.getAttribute("padelMatch-id");
                const userData = JSON.parse(localStorage.getItem("user"));

                padelMatch.players.push({
                    name: userData.name,
                    _id: userData._id
                });

                await joinPadelMatch(padelMatchId);
            });
        });
    });

    return div;
};
