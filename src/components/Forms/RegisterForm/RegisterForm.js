import "./RegisterForm.css";
import { FieldForm } from "../FieldForm/FieldForm";
import { registerUser } from "../../../utils/API/RegisterUser";
import { showPassword } from "../../../utils/showPassword";
import { Home } from "../../../pages/Home/Home";
import { buttonBack } from "../../ButtonBack/ButtonBack";

export const RegisterForm = (form) => {
    form.className = "register-form";
    form.innerHTML = `
    <h2>Registro de Usuarios</h2>
    ${FieldForm({ inputLabel: "Nombre de Usuario", inputType: "text", inputClass: "input-name", inputPlaceholder: "Nombre de usuario" })}
    ${FieldForm({ inputLabel: "Email", inputType: "email", inputClass: "input-email", inputPlaceholder: "user@appadel.es" })}
    <div class="div-password">
        ${FieldForm({ inputLabel: "Contraseña", inputType: "password", inputClass: "input-password", inputPlaceholder: "********" })}
        <i class="bx bx-show"></i>
    </div>
    ${FieldForm({ inputLabel: "Teléfono", inputType: "number", inputClass: "input-phone", inputPlaceholder: "123456789" })}
    ${FieldForm({ divClass: "div-input-file", inputClass: "input-file", inputLabel: "Añadir imagen...", inputType: "file" })}
    <h4 class="name-file"></h4>
    <button class="btn-register-form" type="submit">Crear Cuenta</button>
    <button class="btn-back-register-form" type="button"><img class="img-back-register-form" src="/assets/back.png">Volver<img/></button>
    `;

    showPassword();

    let nameFile = form.querySelector(".input-file");
    nameFile.addEventListener("change", () => {
        form.querySelector(".name-file").innerText = nameFile.files[0].name;
    });
    form.addEventListener("submit", registerUser);
    form.querySelector(".btn-back-register-form").addEventListener("click", () => {
        window.history.pushState("", "", "/home");
        Home();
    });
};
