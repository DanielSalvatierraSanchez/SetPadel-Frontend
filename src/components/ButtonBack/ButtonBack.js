import { PadelMatches } from "../../pages/PadelMatches/PadelMatches";
import "./ButtonBack.css"

export const buttonBack = (parentElement) => {
    const buttonBack = document.createElement("div");
    buttonBack.classList.add("back-btn");
    buttonBack.innerHTML = `<button class="btn-back" type="button"><img class="back-btn-img" src="/assets/back.png">Volver<img/></button>`;
    parentElement.append(buttonBack);
    buttonBack.addEventListener("click", () => {
        window.history.pushState("", "", "/padel_matches");
        PadelMatches();
    });
};