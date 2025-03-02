import { MyPadelMatches } from "../../../pages/MyPadelMatches/MyPadelMatches";
import { PadelMatches } from "../../../pages/PadelMatches/PadelMatches";
import { deletePadelMatch } from "../../../utils/API/DeletePadelMatch";
import "./ConfirmPadelMatchDelete.css";

export const ConfirmPadelMatchDelete = (parentElement, padelMatch, message) => {
    parentElement.innerHTML = `
            <h2 class"title-padel-match-delete">¿Seguro que quieres ${message}?</h2>
            <button class='btn-delete-padel-match-yes'><img class="img-btn-delete-padel-match-yes" src="/assets/delete.webp" alt="yes delete padel match">Sí<img/></button>
            <button class='btn-delete-padel-match-no'><img class="img-btn-delete-padel-match-no" src="/assets/back.webp" alt="no delete padel match">No<img/></button>`;

    const yes = parentElement.querySelector(".btn-delete-padel-match-yes");
    const no = parentElement.querySelector(".btn-delete-padel-match-no");

    yes.addEventListener("click", () => {
        deletePadelMatch(padelMatch);
    });

    no.addEventListener("click", () => {
        MyPadelMatches();
    });
};
