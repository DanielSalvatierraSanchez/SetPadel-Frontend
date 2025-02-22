import "./RegisterForm.css";
import { FieldForm } from "../FieldForm/FieldForm";
import { registerUser } from "../../../utils/API/RegisterUser";
import { showPassword } from "../../../utils/showPassword";
import { Home } from "../../../pages/Home/Home";

export const RegisterForm = (form) => {
    form.className = "register-form";
    form.innerHTML = `
    <h2>Registro de Usuarios</h2>
    <div class="data-container-register">
    ${FieldForm({ inputLabel: "Nombre de Usuario", inputType: "text", inputClass: "input-name-register", inputPlaceholder: "Nombre de usuario" })}
    ${FieldForm({ inputLabel: "Email", inputType: "email", inputClass: "input-email-register", inputPlaceholder: "user@appadel.es" })}
    <div class="password-container">
        ${FieldForm({ inputLabel: "Contraseña", inputType: "password", inputClass: "input-password", inputPlaceholder: "********" })}
    <i class='bx bx-show'></i>
    </div>
    ${FieldForm({ inputLabel: "Teléfono", inputType: "number", inputClass: "input-phone-register", inputPlaceholder: "123456789" })}
    ${FieldForm({ divClass: "input-file-container", inputClass: "input-file", inputLabel: "Añadir imagen...", inputType: "file" })}
    <h4 class="name-file"></h4>
    </div>
    <div class="button-container-register">
    <button class="btn-create-register" type="submit">Crear Cuenta</button>
    <button class="btn-back-register" type="button"><img class="img-btn-back-register" src="/assets/back.png">Volver<img/></button>
    </div>
    `;

    showPassword();

    let nameFile = form.querySelector(".input-file");
    nameFile.addEventListener("change", () => {
        form.querySelector(".name-file").innerText = nameFile.files[0].name;
    });
    form.addEventListener("submit", registerUser);
    form.querySelector(".btn-back-register").addEventListener("click", () => {
        window.history.pushState("", "", "/home");
        Home();
    });
};
