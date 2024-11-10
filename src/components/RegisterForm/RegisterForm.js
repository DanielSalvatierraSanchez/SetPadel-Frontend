import { Button } from "../Button/Button";
import { FieldForm } from "../FieldForm/FieldForm";
import "./RegisterForm.css";
import { API } from "../../utils/API/API.js";

export const RegisterForm = (form) => {
    form.className = "register-form";
    form.innerHTML = `
    <h2>Registro de Usuario</h2>
    ${FieldForm({ labelText: "Nombre de Usuario:", inputType: "text", inputPlaceholder: "Nombre de Usuario" })}
    ${FieldForm({ labelText: "Email:", inputType: "email", inputPlaceholder: "email@email.email" })}
    ${FieldForm({ labelText: "Contraseña:", inputType: "password", inputPlaceholder: "********" })}
    ${FieldForm({ labelText: "Teléfono:", inputType: "tel", inputPlaceholder: "123456789" })}
    <button type="submit">Crear Cuenta</button>
    `;
    //${FieldForm({ labelText: "Imagen de perfil:", inputType: "file" })}

    form.addEventListener("submit", registerUser);

    // form.append(
    //     Button({
    //         text: "Crear Cuenta",
    //         fnc: async () => {},
    //         className: "btn-registerForm"
    //     })
    // );
};

// export const registerUser = async (e) => {
//     const URL = "http://localhost:3000/api/v1/appadel";
//     e.preventDefault();
//     const user = { name: e.target[0].value, email: e.target[1].value, password: e.target[2].value, phone: e.target[3].value };
//     console.log("User Data", user);
//     const userJSON = JSON.stringify(user);
//     const response = await fetch( URL + "/register", { body: userJSON, method: "POST", headers: { "Content-type": "application/json" }});
//     const res = await response.json();
//     return res;
// };
