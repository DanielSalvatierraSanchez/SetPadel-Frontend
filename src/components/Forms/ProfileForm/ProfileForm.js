import "./ProfileForm..css";
import { FieldForm } from "../FieldForm/FieldForm";
import { updateProfileUser } from "../../../utils/API/UpdateProfileUser";
import { showPassword } from "../../../utils/showPassword";
import { Logout } from "../../../pages/Logout/Logout";
import { ConfirmUserDelete } from "../../Confirmations/ConfirmUserDelete/ConfirmUserDelete";

export const ProfileForm = (form) => {
    form.className = "profile-form";
    form.innerHTML = `
    <h2 class="title-profile">Actualizar Usuario</h2>
    <div class="data-container-profile">
    ${FieldForm({
        divClass: "name-container-profile",
        inputLabel: "Nuevo nombre de usuario",
        inputType: "text",
        inputClass: "input-name-profile",
        inputPlaceholder: "Nombre de Usuario"
    })}
    <div class="password-container">
        ${FieldForm({
            divClass: "password-container-profile",
            inputLabel: "Nueva contraseña",
            inputType: "password",
            inputClass: "input-password",
            inputPlaceholder: "********"
        })}
        <i class="i-profile bx bx-show"></i>
    </div>
    ${FieldForm({
        divClass: "phone-container-profile",
        inputLabel: "Nuevo teléfono",
        inputType: "text",
        inputClass: "input-phone-profile",
        inputPlaceholder: "123456789"
    })}
    ${FieldForm({
        divClass: "input-file-container",
        inputClass: "input-file",
        inputLabel: "Nueva imagen...",
        inputType: "file"
    })}
    <h4 class="name-file"></h4>
    </div>
    <div class="button-container-profile">
    <button class="btn-update-profile" type="submit"><img class="img-btn-update-profile" src="/assets/update.webp">Actualizar<img/></button>
    <button class="btn-delete-profile" type="submit"><img class="img-btn-delete-profile" src="/assets/delete.webp">Eliminar<img/></button>
    </div>
    <button class="btn-back-profile" type="button"><img class="img-btn-back-profile" src="/assets/back.webp">Volver<img/></button>
`;

    showPassword();

    let nameFile = form.querySelector(".input-file");
    nameFile.addEventListener("change", () => {
        form.querySelector(".name-file").innerText = nameFile.files[0].name;
    });

    form.addEventListener("submit", updateProfileUser);
    form.querySelector(".btn-delete-profile").addEventListener("click", () => {
        form.classList.add("confirm-delete-user"), ConfirmUserDelete(form, "eliminar tu cuenta");
    });
    form.querySelector(".btn-back-profile").addEventListener("click", () => Logout());
};
