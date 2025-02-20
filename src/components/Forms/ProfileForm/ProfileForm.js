import "./ProfileForm..css";
import { FieldForm } from "../FieldForm/FieldForm";
import { updateProfileUser } from "../../../utils/API/UpdateProfileUser";
import { showPassword } from "../../../utils/showPassword";
import { Logout } from "../../../pages/Logout/Logout";
import { UserDelete } from "../../UserDelete/UserDelete";

export const ProfileForm = (form) => {
    form.className = "profile-form";
    form.innerHTML = `
    <h2>Actualizar Perfil de Usuario</h2>
    ${FieldForm({
        inputLabel: "Nuevo nombre de usuario",
        inputType: "text",
        inputClass: "input-name",
        inputPlaceholder: "Nombre de Usuario"
    })}
    <div class="div-password">
        ${FieldForm({
            inputLabel: "Nueva contraseña",
            inputType: "password",
            inputClass: "input-password",
            inputPlaceholder: "********"
        })}
        <i class="bx bx-show"></i>
    </div>
    ${FieldForm({
        inputLabel: "Nuevo teléfono",
        inputType: "number",
        inputClass: "input-phone",
        inputPlaceholder: "123456789"
    })}
    ${FieldForm({
        divClass: "div-input-file",
        inputClass: "input-file",
        inputLabel: "Nueva imagen...",
        inputType: "file"
    })}
    <h4 class="name-file"></h4>
    <div class="div-btn-update-profile">
    <button class="btn-update-profile" type="submit"><img class="update-btn-img" src="/assets/update.png">Actualizar<img/></button>
    <button class="btn-delete-profile" type="submit"><img class="delete-btn-img" src="/assets/close.png">Eliminar<img/></button>
    </div>
    <button class="btn-back-profile" type="button"><img class="back-btn-img" src="/assets/back.png">Volver<img/></button>
`;

    showPassword();

    let nameFile = form.querySelector(".input-file");
    nameFile.addEventListener("change", () => {
        form.querySelector(".name-file").innerText = nameFile.files[0].name;
    });
    form.addEventListener("submit", updateProfileUser);
    form.querySelector(".btn-delete-profile").addEventListener("click", () => {
        form.classList.add("confirm-delete-user"),
            UserDelete({
                parentElement: form,
                message: "eliminar tu cuenta"
            });
    });
    form.querySelector(".btn-back-profile").addEventListener("click", () => Logout());
};
