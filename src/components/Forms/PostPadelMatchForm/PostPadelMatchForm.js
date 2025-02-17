import { PadelMatches } from "../../../pages/PadelMatches/PadelMatches";
import { postPadelMatch } from "../../../utils/API/PostPadelMatch";
import { FieldForm, FieldSelect } from "../FieldForm/FieldForm";
import "./PostPadelMatchForm.css";

export const PostPadelMatchForm = (form) => {
    form.className = "postPadelMatch-form";
    form.innerHTML = `
    ${FieldForm({ inputLabel: "Título", inputType: "text", inputPlaceholder: "Título" })}
    ${FieldForm({ inputLabel: "Ubicación", inputType: "text", inputPlaceholder: "Ubicación" })}
    ${FieldForm({ inputLabel: "Fecha y Hora", inputType: "datetime-local", inputPlaceholder: "DD / MM / YYYY - HH : MM" })}
    ${FieldSelect({ inputLabel: "Tipo de pista", inputOption1: "Indoor", inputOption2: "Outdoor" })}
    ${FieldForm({ inputLabel: "Imagen", inputType: "file" })}
    <button class="btn-postPadelMatchForm" type="submit">Crear Partido</button>
    <button class="btn-back-postPadelMatchForm" type="button"><img class="back-btn-img" src="/assets/back.png">Volver<img/></button>
    `;
    form.addEventListener("submit", postPadelMatch);
    form.querySelector(".btn-back-postPadelMatchForm").addEventListener("click", () => {
        window.history.pushState("", "", "/padel_matches");
        PadelMatches();
    });
};
