import { successMessage } from "../Messages/Success/SuccessMessage";
import { deleteUserOfPadelMatch } from "../../utils/API/DeleteUserOfPadelMatch";
import { joinPadelMatch } from "../../utils/API/JoinPadelMatch";
import { PadelMatches } from "../../pages/PadelMatches/PadelMatches";
import { getPadelMatches } from "../../utils/API/GetPadelMatches";

export const buttonJoin = async (parentElement, data) => {
    const joinBtn = parentElement.querySelector(".join-btn");
    const modal = parentElement.querySelector(".modal-container");
    const userData = JSON.parse(localStorage.getItem("user"));

    const checkUserJoined = data.players.some((player) => player.userId === userData._id);
    if ((data.isCompleted && data.players.length === 4 && !checkUserJoined)) {
        joinBtn.disabled = true;
        return;
    }
    joinBtn.addEventListener("click", async (e) => {
        e.preventDefault();
        e.stopPropagation();

        try {
            const padelMatchId = e.target.getAttribute("padelMatch-id");

            if (!checkUserJoined) {
                const joinUserInPadelMatch = await joinPadelMatch(padelMatchId);
                if (data.players.length === 4) {
                    joinBtn.disabled = true;
                    data.isCompleted = true;
                }
                successMessage(modal, joinUserInPadelMatch);
                setTimeout(() => {
                    PadelMatches();
                }, 1500);
            } else if (checkUserJoined) {
                const removeUserFromPadelMatch = await deleteUserOfPadelMatch(padelMatchId);
                successMessage(modal, removeUserFromPadelMatch);
                setTimeout(() => {
                    PadelMatches();
                }, 1500);
            }
        } catch (error) {
            console.log("Error en el ButtonJoin.js de los partidos desde el front: ", error.message);
        }
        return;
    });
};
