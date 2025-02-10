import { PadelMatches } from "../pages/PadelMatches/PadelMatches";

export const buttonClose = (parentElement) => {
    const closeBtn = parentElement.querySelector(".close-btn");
    closeBtn.addEventListener("click", () => {
        parentElement.remove();
        PadelMatches();
    });
    parentElement.addEventListener("mouseleave", (e) => {
        parentElement.remove();
        PadelMatches();
    });
};
