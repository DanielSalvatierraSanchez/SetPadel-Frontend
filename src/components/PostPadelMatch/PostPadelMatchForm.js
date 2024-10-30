import "./PostPadelMatchForm.css";
import { Button } from "../Button/Button";
import { FieldForm } from "../FieldForm/FieldForm";

export const PostPadelMatch = (form) => {
    form.className = "postPadelMatch-form";
    form.innerHTML = `
    ${FieldForm({ labelText: "Título del Partido", inputType: "text", inputPlaceholder: "Título" })}
    ${FieldForm({ labelText: "Ubicación", inputType: "text", inputPlaceholder: "Ubicación" })}
    ${FieldForm({ labelText: "Día del Partido", inputType: "number", inputPlaceholder: "Del 1 al 31" })}
    ${FieldForm({ labelText: "Mes", inputType: "text", inputPlaceholder: "Enero, Febrero, Marzo, Abril, Mayo, Junio, Julio, Agosto, Septiembre, Octubre, Noviembre, Diciembre" })}
    ${FieldForm({ labelText: "Hora del Partido", inputType: "text", inputPlaceholder: "HH:MM" })}
    ${FieldForm({ labelText: "Fecha del Partido", inputType: "date", inputPlaceholder: "DD / MM / YYYY" })}
    ${FieldForm({ labelText: "Hora del Partido", inputType: "datetime-local", inputPlaceholder: "DD / MM / YYYY - HH : MM" })}
    ${FieldForm({ labelText: "Tipo de Pista", inputType: "text", inputPlaceholder: "Indoor / Outdoor" })}
    ${FieldForm({ labelText: "Imagen", inputType: "file" })}
    `;

    form.append(Button({ text: "Crear Partido", fnc: async () => {}, className: "btn-postPadelMatchForm" }));
};
