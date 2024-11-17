import "./PostPadelMatchForm.css";
import { Button } from "../Button/Button";
import { FieldForm } from "../FieldForm/FieldForm";

export const PostPadelMatch = (form) => {
    form.className = "postPadelMatch-form";
    form.innerHTML = `
    ${FieldForm({ inputLabel: "Título del Partido", inputType: "text", inputPlaceholder: "Título" })}
    ${FieldForm({ inputLabel: "Ubicación", inputType: "text", inputPlaceholder: "Ubicación" })}
    ${FieldForm({ inputLabel: "Fecha del Partido", inputType: "date", inputPlaceholder: "DD / MM / YYYY" })}
    ${FieldForm({ inputLabel: "Hora del Partido", inputType: "datetime-local", inputPlaceholder: "DD / MM / YYYY - HH : MM" })}
    ${FieldForm({ inputLabel: "Tipo de Pista", inputType: "text", inputPlaceholder: "Indoor / Outdoor" })}
    ${FieldForm({ inputLabel: "Imagen", inputType: "file" })}
    `;
    form.append(Button({ text: "Crear Partido", fnc: async () => {}, className: "btn-postPadelMatchForm" }));
};

/*
    ${FieldForm({ inputLabel: "Día del Partido", inputType: "number", inputPlaceholder: "Del 1 al 31" })}
    ${FieldForm({ inputLabel: "Mes", inputType: "text", inputPlaceholder: "Enero, Febrero, Marzo, Abril, Mayo, Junio, Julio, Agosto, Septiembre, Octubre, Noviembre, Diciembre" })}
    ${FieldForm({ inputLabel: "Hora del Partido", inputType: "text", inputPlaceholder: "HH:MM" })}
*/
