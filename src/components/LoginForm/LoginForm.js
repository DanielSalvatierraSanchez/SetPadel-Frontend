import "./LoginForm.css";
import { loginUser } from "../../utils/API/LoginUser";
import { FieldForm } from "../FieldForm/FieldForm";

// CREAR FORMULARIO DEL LOGIN => PASANDO POR PARAMS EL FORM DEL LOGIN
export const LoginForm = (form) => {
    form.className = "login-form";
    form.innerHTML = `
    <h2>Login</h2>
        ${FieldForm({ inputLabel: "Email", inputType: "string", inputPlaceholder: "email@email.email" })}
        ${FieldForm({ inputLabel: "Contraseña", inputType: "password", inputPlaceholder: "********" })}
        <button class="btn-loginForm" type="submit">Acceder</button>
        `;
    form.addEventListener("submit", loginUser);
    // form.append(Button({ text: "Login", fnc: () => loginUser, className: "btn-loginForm" }));
};
