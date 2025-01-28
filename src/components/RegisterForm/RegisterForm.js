import "./RegisterForm.css";
import { FieldForm } from "../FieldForm/FieldForm";
import { registerUser } from "../../utils/API/RegisterUser";
import { showPassword } from "../../utils/showPassword";
import { Home } from "../../pages/Home/Home";

export const RegisterForm = (form) => {
    form.className = "register-form";
    form.innerHTML = `
    <h2>Registro de Usuarios</h2>
    ${FieldForm({ inputLabel: "Nombre de Usuario", inputType: "text", inputClass: "input-name", inputPlaceholder: "Nombre de Usuario" })}
    ${FieldForm({ inputLabel: "Email", inputType: "email", inputClass: "input-email", inputPlaceholder: "email@email.email" })}
    <div class="div-password">
        ${FieldForm({ inputLabel: "Contraseña", inputType: "password", inputClass: "input-password", inputPlaceholder: "********" })}
        <i class="bx bx-show"></i>
    </div>
    ${FieldForm({ inputLabel: "Teléfono", inputType: "number", inputClass: "input-phone", inputPlaceholder: "123456789", max: 999999999 })}
    ${FieldForm({ inputLabel: "Imagen de perfil", inputType: "file", inputClass: "input-image" })}
    <button class="btn-register-form" type="submit">Crear Cuenta</button>
    <button class="btn-back" type="button">Volver</button>
    `;
    showPassword();
    form.addEventListener("submit", registerUser);
    form.querySelector(".btn-back").addEventListener("click", () => Home());
};
