import "./RegisterForm.css";
import { FieldForm } from "../FieldForm/FieldForm";
import { registerUser } from "../../utils/API/RegisterUser";

export const RegisterForm = (form) => {
    form.className = "register-form";
    form.innerHTML = `
    <h2>Registro de Usuarios</h2>
    ${FieldForm({ inputLabel: "Nombre de Usuario", inputType: "text", inputPlaceholder: "Nombre de Usuario" })}
    ${FieldForm({ inputLabel: "Email", inputType: "email", inputPlaceholder: "email@email.email" })}
    ${FieldForm({ inputLabel: "Contraseña", inputType: "password", inputPlaceholder: "********" })}
    ${FieldForm({ inputLabel: "Teléfono", inputType: "number", inputPlaceholder: "123456789", max: 999999999 })}
    ${FieldForm({ inputLabel: "Imagen de perfil", inputType: "file" })}
    <button class="btn-register-form" type="submit">Crear Cuenta</button>
    `;
    form.addEventListener("submit", registerUser);
};
