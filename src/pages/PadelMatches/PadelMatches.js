import "./PadelMatches.css";
import { createPage } from "../../functions/CreatePage";
import { getPadelMatches } from "../../utils/API/GetPadelMatches";
import { getToken, isAuth } from "../../utils/isAuth";
import { Loader } from "../../components/Loader/Loader";
import { randomMessageError } from "../../utils/RandomMessageError";
import { dateFormat } from "../../utils/DateFormatted";
import { modal } from "../../components/ModalPadelMatch/Modal";
import { joinPadelMatch } from "../../utils/API/JoinPadelMatch";
import { successMessage } from "../../components/Messages/Success/SuccessMessage";

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

    try {
        const allPadelMatch = await getPadelMatches();
        const { allPadelMatches } = allPadelMatch;
        localStorage.setItem("allPadelMatches", JSON.stringify(allPadelMatches));

        const padelMatchContainer = document.createElement("div");
        padelMatchContainer.classList.add("padel-match-container");

        if (!allPadelMatches || allPadelMatches.length === 0) {
            randomMessageError(div, "No hay ningún partido programado.");
            return;
        }

        const userData = JSON.parse(localStorage.getItem("user"));

        allPadelMatches.forEach((padelMatch) => {
            const padelMatchCard = document.createElement("div");
            padelMatchCard.classList.add("padel-match-card");

            const dateFormatted = dateFormat(padelMatch.date);

            padelMatchCard.innerHTML = `
            <p><strong>Fecha:</strong> ${dateFormatted}</p>
            <p><strong>Asistentes:</strong> ${padelMatch.players.length === 4 ? "PARTIDO COMPLETO" : padelMatch.players.length / 1}</p>
            `;
            padelMatchContainer.append(padelMatchCard);
            div.append(padelMatchContainer);

            padelMatchCard.addEventListener("click", (e) => {
                e.preventDefault();

                const existingModal = document.querySelector(".modal");
                if (existingModal) {
                    existingModal.remove();
                }

                const padelMatchModal = document.createElement("div");
                padelMatchModal.classList.add("modal");
                // padelMatchModal.classList.add("modal-show");
                modal(padelMatchModal, padelMatch, userData);
                padelMatchCard.append(padelMatchModal);

                // const closeBtn = padelMatchModal.querySelector(".close-btn");
                // closeBtn.addEventListener("click", () => {
                //     padelMatchModal.remove();
                //     PadelMatches();
                //     return;
                // });
/*
                const joinBtn = padelMatchModal.querySelector(".join-btn");
                joinBtn.addEventListener("click", async (e) => {
                    e.preventDefault();
                    e.stopPropagation();

                    const modal = document.querySelector(".modal-container");
                    const padelMatchId = e.target.getAttribute("padelMatch-id");
                    const userData = JSON.parse(localStorage.getItem("user"));

                    const checkUserJoined = padelMatch.players.some((player) => player.userId === userData._id);
                    if (checkUserJoined) {
                        randomMessageError(modal, "Ya estas inscrito en este partido.");
                        return;
                    } else if (padelMatch.players.length === 4) {
                        randomMessageError(modal, "El partido está completo.");
                        return;
                    }

                    const response = await joinPadelMatch(padelMatchId);
                    // if (response) {
                    // padelMatch.players.push({
                    //     name: userData.name,
                    //     _id: userData._id
                    // });
                    // const assistants = padelMatchCard.querySelector("p:last-child");
                    // if (assistants) {
                    //     assistants.textContent = `Asistentes: ${userData.name}`;
                    // }
                    // }
                    successMessage(response, modal);
                    return response;
                });*/
            });
        });
    } catch (error) {}

    return div;
};
