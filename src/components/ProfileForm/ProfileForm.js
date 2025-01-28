import "./ProfileForm..css";
import { FieldForm } from "../FieldForm/FieldForm";
import { updateProfileUser } from "../../utils/API/UpdateProfileUser";
import { showPassword } from "../../utils/showPassword";
import { PadelMatches } from "../../pages/PadelMatches/PadelMatches";
import { confirmationOfLogout } from "../../utils/ConfirmationOfLogout";
import { Profile } from "../Profile/Profile";

// const profileContainer = document.querySelector(".profile-container");
export const ProfileForm = (form) => {
    form.className = "profile-form";
    form.innerHTML = `
    <h2>Actualizar Perfil de Usuario</h2>
    ${FieldForm({ inputLabel: "Nuevo nombre de usuario", inputType: "text", inputClass: "input-name", inputPlaceholder: "Nombre de Usuario" })}
    <div class="div-password">
        ${FieldForm({ inputLabel: "Nueva contraseña", inputType: "password", inputClass: "input-password", inputPlaceholder: "********" })}
        <i class="bx bx-show"></i>
    </div>
    ${FieldForm({ inputLabel: "Nuevo teléfono", inputType: "number", inputClass: "input-phone", inputPlaceholder: "123456789", max: 999999999 })}
    ${FieldForm({ inputLabel: "Nueva imagen de perfil", inputClass: "input-image", inputType: "file" })}
    <div class="div-btn-update-profile">
    <button class="btn-update-profile" type="submit">Actualizar</button>
    <button class="btn-delete" type="submit">Eliminar</button>
    </div>
    <button class="btn-back" type="button">Volver</button>
`;
    showPassword();
    form.addEventListener("submit", updateProfileUser);
    form.querySelector(".btn-delete").addEventListener("click", () => confirmationOfLogout({ parentElement: form, message: "eliminar cuenta" }));
    form.querySelector(".btn-back").addEventListener("click", () => PadelMatches());
};
