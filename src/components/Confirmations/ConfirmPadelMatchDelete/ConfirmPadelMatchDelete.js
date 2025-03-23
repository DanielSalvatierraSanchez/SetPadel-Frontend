import "./ConfirmPadelMatchDelete.css";
import { PadelMatches } from "../../../pages/PadelMatches/PadelMatches";
import { deletePadelMatch } from "../../../utils/API/DeletePadelMatch";
import { randomMessageError } from "../../../utils/RandomMessageError";
import { Loader } from "../../Loader/Loader";

export const ConfirmPadelMatchDelete = (parentElement, padelMatch, message) => {
    parentElement.innerHTML = `
            <h2 class"title-padel-match-delete">¿Seguro que quieres ${message}?</h2>
            <button class='btn-delete-padel-match-yes'><img class="img-btn-delete-padel-match-yes" src="/assets/delete.webp" alt="yes delete padel match">Sí<img/></button>
            <button class='btn-delete-padel-match-no'><img class="img-btn-delete-padel-match-no" src="/assets/back.webp" alt="no delete padel match">No<img/></button>`;

    const container = document.querySelector(".padel-match-container");
    const yes = parentElement.querySelector(".btn-delete-padel-match-yes");
    const no = parentElement.querySelector(".btn-delete-padel-match-no");

    yes.addEventListener("click", () => {
        yes.disabled = true;
        no.disabled = true;
        deletePadelMatch(container, padelMatch);
    });

    no.addEventListener("click", () => {
        yes.disabled = true;
        no.disabled = true;
        randomMessageError(container, "Cargando partidos...");
        Loader(container);
        setTimeout(() => {
            window.history.pushState("", "", "/padel_matches");
            PadelMatches();
        }, 1500);
    });
};
