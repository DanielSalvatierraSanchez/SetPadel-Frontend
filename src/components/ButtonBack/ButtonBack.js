import "./ButtonBack.css";
import { PadelMatches } from "../../pages/PadelMatches/PadelMatches";

export const buttonBack = (parentElement) => {
    const buttonBack = document.createElement("div");
    buttonBack.classList.add("btn-back-container");
    buttonBack.innerHTML = `<button class="btn-back" type="button"><img class="img-btn-back" src="/assets/back.webp">Volver<img/></button>`;
    parentElement.append(buttonBack);
    buttonBack.addEventListener("click", () => {
        window.history.pushState("", "", "/padel_matches");
        PadelMatches();
    });
};
