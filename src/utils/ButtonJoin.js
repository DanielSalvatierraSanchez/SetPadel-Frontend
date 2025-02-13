import { Loader } from "../components/Loader/Loader";
import { successMessage } from "../components/Messages/Success/SuccessMessage";
import { PadelMatches } from "../pages/PadelMatches/PadelMatches";
import { deleteUserOfPadelMatch } from "./API/DeleteUserOfPadelMatch";
import { joinPadelMatch } from "./API/JoinPadelMatch";
import { randomMessageError } from "./RandomMessageError";

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
            console.log("checkUserJoined => ", checkUserJoined);

            // join(joinBtn, parentElement, padelMatchId, checkUserJoined);
            if (!checkUserJoined) {
                const joinUserInPadelMatch = await joinPadelMatch(padelMatchId);
                successMessage(modal, joinUserInPadelMatch);
                // Loader(modal);
                // setTimeout(() => PadelMatches(), 2000);
            } else if (checkUserJoined) {
                console.log("ESTOY REGISTRADO");
                const removeUserFromPadelMatch = await deleteUserOfPadelMatch(padelMatchId);
                successMessage(modal, removeUserFromPadelMatch);
                // Loader(modal);
                // setTimeout(() => PadelMatches(), 2000);
            }
        } catch (error) {
            console.log("Error en el ButtonJoin.js de los partidos desde el front: ", error.message);
        }
        return;
    });
};
