import "./PostPadelMatchForm.css";
import { PadelMatches } from "../../../pages/PadelMatches/PadelMatches";
import { postPadelMatch } from "../../../utils/API/PostPadelMatch";
import { FieldForm, FieldSelect } from "../FieldForm/FieldForm";

export const PostPadelMatchForm = (form) => {
    form.className = "postPadelMatch-form";
    form.innerHTML = `
    <h2 class="title-postPadelMatchForm">Crea un Partido de Padel</h2>
    <div class="data-container-postPadelMatchForm">
    ${FieldForm({ inputLabel: "Título", inputClass: "input-title-postPadelMatchForm", inputType: "text", inputPlaceholder: "Título" })}
    ${FieldForm({ inputLabel: "Ubicación", inputClass: "input-location-postPadelMatchForm", inputType: "text", inputPlaceholder: "Ubicación" })}
    ${FieldForm({ inputLabel: "Fecha y Hora", inputClass: "input-date-postPadelMatchForm", inputType: "datetime-local", inputPlaceholder: "DD / MM / YYYY - HH : MM" })}
    ${FieldSelect({ inputLabel: "Tipo de pista", inputClass: "input-select-postPadelMatchForm", inputOption1: "Indoor", inputOption2: "Outdoor" })}
    ${FieldForm({ divClass: "input-file-container", inputClass: "input-file", inputLabel: "Añadir imagen...", inputType: "file" })}
    <h4 class="name-file"></h4>
    </div>
    <div class="button-container-postPadelMatchForm">
    <button class="btn-create-postPadelMatchForm" type="submit">Crear Partido</button>
    <button class="btn-back-postPadelMatchForm" type="button"><img class="img-btn-back-postPadelMatchForm" src="/assets/back.webp">Volver<img/></button>
    </div>
    `;

    let nameFile = form.querySelector(".input-file");
    nameFile.addEventListener("change", () => {
        form.querySelector(".name-file").innerText = nameFile.files[0].name;
    });
    form.addEventListener("submit", postPadelMatch);
    form.querySelector(".btn-back-postPadelMatchForm").addEventListener("click", () => {
        window.history.pushState("", "", "/padel_matches");
        PadelMatches();
    });
};
