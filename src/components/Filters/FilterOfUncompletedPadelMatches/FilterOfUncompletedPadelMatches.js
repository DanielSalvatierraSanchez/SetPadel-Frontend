import { randomMessageError } from "../../../utils/RandomMessageError";
import { CardOfPadelMatch } from "../../CardOfPadelMatch/CardOfPadelMatch";
import "./FilterOfUncompletedPadelMatches.css";

export const FilterOfUncompletedPadelMatches = async (parentElement, uncompletedPadelMatches) => {
    const uncompletedPadelMatchContainer = document.createElement("div");
    uncompletedPadelMatchContainer.classList.add("uncompleted-padel-match-container");

    try {
        if (!uncompletedPadelMatches || uncompletedPadelMatches.length === 0) {
            randomMessageError(parentElement, "Todos los partidos están completos.");
            return;
        }

        CardOfPadelMatch(uncompletedPadelMatchContainer, uncompletedPadelMatches);

        parentElement.append(uncompletedPadelMatchContainer);
    } catch (error) {
        console.log("Error en FilterOfUncompletedPadelMatches del front: ", error.message);
    }
};
