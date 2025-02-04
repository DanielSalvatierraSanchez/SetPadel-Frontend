import "./PadelMatches.css";
import { createPage } from "../../functions/CreatePage";
import { getPadelMatches } from "../../utils/API/GetPadelMatches";
import { getToken, isAuth } from "../../utils/isAuth";
import { Loader } from "../../components/Loader/Loader";
import { joinPadelMatch } from "../../utils/API/JoinPadelMatch";
import { randomMessageError } from "../../utils/RandomMessageError";
import { dateFormat } from "../../utils/DateFormatted";
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
    localStorage.setItem("allPadelMatches", JSON.stringify(allPadelMatches));
    const userData = JSON.parse(localStorage.getItem("user"));

    const padelMatchContainer = document.createElement("div");
    padelMatchContainer.classList.add("padel-match-container");

    if (!allPadelMatches || allPadelMatches.length === 0) {
        randomMessageError(div, "No hay ningún partido programado.");
        return;
    }

    allPadelMatches.forEach((padelMatch) => {
        const padelMatchCard = document.createElement("div");
        padelMatchCard.classList.add("padel-match-card");

        const dateFormatted = dateFormat(padelMatch.date);

        padelMatchCard.innerHTML = `
        <p>Fecha: ${dateFormatted}</p>
        <p>Asistentes: ${padelMatch.players.length === 4 ? "PARTIDO COMPLETO" : padelMatch.players.length / 1}</p>
        `;

        padelMatchContainer.append(padelMatchCard);
        div.append(padelMatchContainer);

        padelMatchCard.addEventListener("click", (e) => {
            e.preventDefault();

            const existingModal = padelMatchCard.querySelector(".modal");
            if (existingModal) {
                existingModal.remove();
            }

            // const padelMatchModal = document.getElementsByClassName(".modal")
            // modalPadelMatch(padelMatchCard, padelMatch)
            const padelMatchModal = document.createElement("div");
            padelMatchModal.classList.add("modal");
            // padelMatchModal.classList.add("modal-show");

            const userData = JSON.parse(localStorage.getItem("user"));

            modal(padelMatchModal, padelMatch, userData);

            // padelMatchCard.replaceWith(padelMatchModal);
            padelMatchCard.append(padelMatchModal);

            // padelMatchModal.showModal();

            const closeBtn = padelMatchModal.querySelector(".close-btn");
            closeBtn.addEventListener("click", () => {
                // padelMatchModal.classList.remove("modal");
                // padelMatchModal.classList.remove("modal-show");
                // padelMatchCard.replaceWith(padelMatchModal);
                padelMatchModal.remove();
                // padelMatchModal.close();
                PadelMatches();
                return;
            });

            const joinBtn = padelMatchModal.querySelector(".join-btn");
            joinBtn.addEventListener("click", async (e) => {
                e.preventDefault();
                e.stopPropagation();

                const padelMatchId = e.target.getAttribute("padelMatch-id");
                const userData = JSON.parse(localStorage.getItem("user"));

                if (padelMatch.players.length === 4) {
                    return;
                }

                const checkUserJoined = padelMatch.players.some((player) => player._id === userData._id);
                if (checkUserJoined) {
                    return;
                }

                padelMatch.players.push({
                    name: userData.name,
                    _id: userData._id
                });

                const response = await joinPadelMatch(padelMatchId);
                if (response && response.players) {
                    padelMatch.players = response.players;

                    const assistants = padelMatchCard.querySelector("p:last-child");
                    if (assistants) {
                        assistants.textContent = `Asistentes: ${response.players.length}`;
                    }
                }
                return response;
            });
        });
    });

    return div;
};
