import "./ProfileForm..css";
import { FieldForm } from "../FieldForm/FieldForm";
import { updateProfileUser } from "../../utils/API/UpdateProfileUser";
import { showPassword } from "../../utils/showPassword";

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
    <button class="btn-profile-form" type="submit">Actualizar</button>
`;
    showPassword();
    form.addEventListener("submit", updateProfileUser);
};
