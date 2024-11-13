import "./Register.css";
import { createPage } from "../../functions/CreatePage";
import { FieldForm } from "../../components/FieldForm/FieldForm";
import { Button } from "../../components/Button/Button";
import { registerUser } from "../../utils/API/CreateUser";

export const Register = () => {
    const div = createPage("Register");
    const form = document.createElement("form");

    div.append(form);

    RegisterForm(form);
};

const RegisterForm = (form) => {
    form.className = "register-form";
    form.innerHTML = `
    <h2>Registro de Usuarios</h2>
    ${FieldForm({ inputLabel: "Nombre de Usuario:", inputType: "text", inputPlaceholder: "Nombre de Usuario" })}
    ${FieldForm({ inputLabel: "Email:", inputType: "email", inputPlaceholder: "email@email.email" })}
    ${FieldForm({ inputLabel: "Contraseña:", inputType: "password", inputPlaceholder: "********" })}
    ${FieldForm({ inputLabel: "Teléfono:", inputType: "tel", inputPlaceholder: "123456789" })}
    ${FieldForm({ inputLabel: "Imagen de perfil:", inputType: "file" })}
    <button class='btn-register-form' type='submit'>
        Crear Cuenta
    </button>
    `;
    form.addEventListener("submit", registerUser);
};
// form.append(
//     Button({
//         text: "Crear Cuenta",
//         fnc: () => registerUser,
//         className: "btn-registerForm"
//     })
// );
