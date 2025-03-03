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
    ${FieldForm({ divClass: "name-container-register", inputLabel: "Nombre de Usuario", imgSrc:"", inputType: "text", inputClass: "input-name-register", inputPlaceholder: "Nombre de usuario" })}
    ${FieldForm({ divClass: "email-container-register", inputLabel: "Email", imgSrc:"", inputType: "email", inputClass: "input-email-register", inputPlaceholder: "user@appadel.es" })}
    <div class="password-container">
        ${FieldForm({ divClass: "password-container-register", inputLabel: "Contraseña", imgSrc:"", inputType: "password", inputClass: "input-password", inputPlaceholder: "********" })}
    <i class='i-register bx bx-show'></i>
    </div>
    ${FieldForm({ divClass: "phone-container-register", inputLabel: "Teléfono", imgSrc:"", inputType: "text", inputClass: "input-phone-register", inputPlaceholder: "123456789" })}
    ${FieldForm({ divClass: "input-file-container", imgClass:"img-file-register", imgSrc:"/assets/picture.webp", inputClass: "input-file", inputLabel: "Añadir imagen...", inputType: "file" })}
    <h4 class="name-file"></h4>
    </div>
    <div class="button-container-register">
    <button class="btn-create-register" type="submit">Crear Cuenta</button>
    <button class="btn-back-register" type="button"><img class="img-btn-back-register" src="/assets/back.webp">Volver<img/></button>
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
