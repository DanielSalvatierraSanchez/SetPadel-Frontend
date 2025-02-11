import { successMessage } from "../components/Messages/Success/SuccessMessage";
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

        const checkUserJoined = data.players.some((player) => player.userId === userData._id);
        // if (checkUserJoined) {
        //     randomMessageError(modal, "Ya estas inscrito en este partido.");
        // } else if (data.players.length === 4) {
        //     randomMessageError(modal, "El partido está completo.");
        // }
        let response;
        if (checkUserJoined) {
            // Lógica para retirarse del partido
            response = await deleteUserOfPadelMatch();
            if (response) {
                successMessage(modal, "Te has retirado del partido correctamente");
                // // Actualizar UI
                // setTimeout(() => {
                //     parentElement.remove();
                //     PadelMatches();
                // }, 1500);
            }
        } else {
            //     // Lógica para unirse al partido
            //     if (data.players.length === 4) {
            //         randomMessageError(modal, "El partido está completo.");
            //         return;
            //     }

            response = await joinPadelMatch(padelMatchId);
            successMessage(response, modal);
        }
        return response;
    });
};
