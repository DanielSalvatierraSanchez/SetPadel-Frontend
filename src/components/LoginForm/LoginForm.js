import "./LoginForm.css";
import { FieldForm } from "../FieldForm/FieldForm";
import { loginUser } from "../../utils/API/LoginUser";

export const LoginForm = (form) => {
    form.className = "login-form";
    form.innerHTML = `
    <h2>Iniciar Sesión</h2>
        ${FieldForm({ inputLabel: "Email", inputType: "string", inputPlaceholder: "email@email.email" })}
        ${FieldForm({ inputLabel: "Contraseña", inputType: "password", inputPlaceholder: "********" })}
        <button class="btn-loginForm" type="submit">Acceder</button>
        `;
    form.addEventListener("submit", loginUser);
};
