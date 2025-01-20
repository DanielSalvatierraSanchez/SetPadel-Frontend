import "./ProfileForm..css";
import { FieldForm } from "../FieldForm/FieldForm";
import { updateProfileUser } from "../../utils/API/UpdateProfileUser";

export const ProfileForm = (form) => {
    form.className = "profile-form";
    form.innerHTML = `
    <h2>Actualizar Perfil de Usuario</h2>
    ${FieldForm({ inputLabel: "Nuevo nombre de usuario", inputType: "text", inputPlaceholder: "Nombre de Usuario" })}
    ${FieldForm({ inputLabel: "Nueva contraseña", inputType: "password", inputPlaceholder: "********" })}
    ${FieldForm({ inputLabel: "Nuevo teléfono", inputType: "number", inputPlaceholder: "123456789", max: 999999999 })}
    ${FieldForm({ inputLabel: "Nueva imagen de perfil", inputType: "file" })}
    <button class="btn-profile-form" type="submit">Actualizar</button>
`;
    form.addEventListener("submit", updateProfileUser);
};
