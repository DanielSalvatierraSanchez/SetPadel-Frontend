import "./LoginForm.css";
import { FieldForm } from "../FieldForm/FieldForm";
import { loginUser } from "../../../utils/API/LoginUser";
import { showPassword } from "../../../utils/showPassword";
import { Home } from "../../../pages/Home/Home";

export const LoginForm = (form) => {
    form.className = "login-form";
    form.innerHTML = `
    <h2>Iniciar Sesión</h2>
        ${FieldForm({ divClass: "email-container-login", inputLabel: "Email", inputType: "string", inputClass: "input-email-login", inputPlaceholder: "email@email.email" })}
        <div class="password-container">
            ${FieldForm({ divClass: "password-container-login", inputLabel: "Contraseña", inputType: "password", inputClass: "input-password", inputPlaceholder: "********" })}
            <i class="i-login bx bx-show"></i>
        </div>
        <button class="btn-access-login" type="submit">Acceder</button>
        <button class="btn-back-login" type="button"><img class="img-btn-back-login" src="/assets/back.webp">Volver<img/></button>
        `;
    showPassword();
    form.addEventListener("submit", loginUser);
    form.querySelector(".btn-back-login").addEventListener("click", () => {
        window.history.pushState("", "", "/home");
        Home();
    });
};
