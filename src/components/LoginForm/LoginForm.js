import "./LoginForm.css";
import { loginUser } from "../../utils/API/LoginUser";
import { FieldForm } from "../FieldForm/FieldForm";

export const LoginForm = (form) => {
    form.className = "login-form";
    form.innerHTML = `
    <h2>Login</h2>
        ${FieldForm({ inputLabel: "Email", inputType: "string", inputPlaceholder: "email@email.email" })}
        ${FieldForm({ inputLabel: "Contraseña", inputType: "password", inputPlaceholder: "********" })}
    <button type="submit">Acceder</button>
    `;
    form.addEventListener("submit", loginUser);
};
// form.append(Button({ text: "Login", fnc: () => {}, className: "btn-loginForm" }));
