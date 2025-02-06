import "./PadelMatches.css";
import { createPage } from "../../functions/CreatePage";
import { getPadelMatches } from "../../utils/API/GetPadelMatches";
import { getToken, isAuth } from "../../utils/isAuth";
import { Loader } from "../../components/Loader/Loader";
import { joinPadelMatch } from "../../utils/API/JoinPadelMatch";
import { randomMessageError } from "../../utils/RandomMessageError";
import { dateFormat } from "../../utils/DateFormatted";
import { modal } from "../../components/ModalPadelMatch/Modal";
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

    const allPadelMatch = await getPadelMatches();
    const { allPadelMatches } = allPadelMatch;
    localStorage.setItem("allPadelMatches", JSON.stringify(allPadelMatches));

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

            const userData = JSON.parse(localStorage.getItem("user"));

            const existingModal = padelMatchCard.querySelector(".modal");
            if (existingModal) {
                existingModal.remove();
            }

            // const padelMatchModal = document.getElementsByClassName(".modal")
            // modalPadelMatch(padelMatchCard, padelMatch)
            const padelMatchModal = document.createElement("div");
            padelMatchModal.classList.add("modal");
            // padelMatchModal.classList.add("modal-show");
            modal(padelMatchModal, padelMatch, userData);
            padelMatchCard.append(padelMatchModal);

            const closeBtn = padelMatchModal.querySelector(".close-btn");
            closeBtn.addEventListener("click", () => {
                // padelMatchModal.classList.remove("modal");
                // padelMatchModal.classList.remove("modal-show");
                // padelMatchCard.replaceWith(padelMatchModal);
                padelMatchModal.remove();
                PadelMatches();
                return;
            });

            const joinBtn = padelMatchModal.querySelector(".join-btn");
            joinBtn.addEventListener("click", async (e) => {
                e.preventDefault();
                e.stopPropagation();

                const modal = document.querySelector(".modal-container");
                const padelMatchId = e.target.getAttribute("padelMatch-id");
                const userData = JSON.parse(localStorage.getItem("user"));

                const checkAssistants = padelMatch.players.some((player) => player === userData._id);
                console.log(checkAssistants)
                if (checkAssistants) {
                    randomMessageError(modal, "Ya estas inscrito en este partido.");
                    return;
                } else if (padelMatch.players.length === 4) {
                    randomMessageError(modal, "El partido está completo.");
                    return;
                }

                const response = await joinPadelMatch(padelMatchId);
                console.log("response JOIN BTN PADELMATCHES => ", response);
                if (response) {
                    console.log("padelMatch.players JOIN BTN PADELMATCHES => ", padelMatch.players);
                    // padelMatch.players.push({
                    //     name: userData.name,
                    //     _id: userData._id
                    // });
                    console.log("padelMatch.players JOIN BTN PADELMATCHES => ", padelMatch.players);

                    // const assistants = padelMatchCard.querySelector("p:last-child");
                    // if (assistants) {
                    //     assistants.textContent = `Asistentes: ${userData.name}`;
                    // }
                }
                successMessage(response, modal);
                return response;
            });
        });
    });

    return div;
};
