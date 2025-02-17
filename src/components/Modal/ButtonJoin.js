import { Loader } from "../Loader/Loader";
import { successMessage } from "../Messages/Success/SuccessMessage";
import { deleteUserOfPadelMatch } from "../../utils/API/DeleteUserOfPadelMatch";
import { joinPadelMatch } from "../../utils/API/JoinPadelMatch";

export const buttonJoin = async (parentElement, data) => {
    const joinBtn = parentElement.querySelector(".join-btn");
    joinBtn.addEventListener("click", async (e) => {
        e.preventDefault();
        e.stopPropagation();

        const modal = parentElement.querySelector(".modal-container");
        const padelMatchId = e.target.getAttribute("padelMatch-id");
        const userData = JSON.parse(localStorage.getItem("user"));

        try {
            const checkUserJoined = data.players.some((player) => player.userId === userData._id);
            if (!checkUserJoined) {
                const joinUserInPadelMatch = await joinPadelMatch(padelMatchId);
                joinBtn.disabled = true;
                successMessage(modal, joinUserInPadelMatch);
            } else if (checkUserJoined) {
                const removeUserFromPadelMatch = await deleteUserOfPadelMatch(padelMatchId);
                joinBtn.disabled = true;
                successMessage(modal, removeUserFromPadelMatch);
            }
        } catch (error) {
            console.log("Error en el ButtonJoin.js de los partidos desde el front: ", error.message);
        }
        return;
    });
};
