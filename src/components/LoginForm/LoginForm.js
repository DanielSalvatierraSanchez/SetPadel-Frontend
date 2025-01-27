import "./LoginForm.css";
import { FieldForm } from "../FieldForm/FieldForm";
import { loginUser } from "../../utils/API/LoginUser";
import { showPassword } from "../../utils/showPassword";

export const LoginForm = (form) => {
    form.className = "login-form";
    form.innerHTML = `
    <h2>Iniciar Sesión</h2>
        ${FieldForm({ inputLabel: "Email", inputType: "string", inputClass: "input-email", inputPlaceholder: "email@email.email" })}
        <div class="div-password">
            ${FieldForm({ inputLabel: "Contraseña", inputType: "password", inputClass: "input-password", inputPlaceholder: "********" })}
            <i class="bx bx-show"></i>
        </div>
        <button class="btn-loginForm" type="submit">Acceder</button>
        `;
    showPassword();
    form.addEventListener("submit", loginUser);
};
