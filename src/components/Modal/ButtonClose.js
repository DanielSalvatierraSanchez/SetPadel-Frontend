import { PadelMatches } from "../../pages/PadelMatches/PadelMatches";

export const buttonClose = (parentElement) => {
    const closeBtn = parentElement.querySelector(".close-btn");
    closeBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        parentElement.remove();
        PadelMatches();
    });

    parentElement.addEventListener("mouseleave", (e) => {
        e.stopPropagation();
        parentElement.remove();
        PadelMatches();
    });
};
