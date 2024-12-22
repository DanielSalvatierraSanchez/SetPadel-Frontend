import "./ProfileForm..css";

export const ProfileForm = (form) => {
    form.className = "profile-form";
    form.innerHTML = `
    <h2>Actualizar Perfil de Usuario</h2>
    ${FieldForm({ inputLabel: "Nuevo nombre de usuario", inputType: "text", inputPlaceholder: "Nombre de Usuario" })}
    ${FieldForm({ inputLabel: "Nuevo email", inputType: "email", inputPlaceholder: "email@email.email" })}
    ${FieldForm({ inputLabel: "Nueva contraseña", inputType: "password", inputPlaceholder: "********" })}
    ${FieldForm({ inputLabel: "Nuevo teléfono", inputType: "number", inputPlaceholder: "123456789" })}
    ${FieldForm({ inputLabel: "Nueva imagen de perfil", inputType: "file" })}
    <button class="btn-profile-form" type="submit">Actualizar</button>
`;
    form.addEventListener("submit", updateUser);
};
/*
export const LoginForm = (form) => {
    form.className = "login-form";
    form.innerHTML = `
    <h2>Iniciar Sesión</h2>
        ${FieldForm({ inputLabel: "Email", inputType: "string", inputPlaceholder: "email@email.email" })}
        ${FieldForm({ inputLabel: "Contraseña", inputType: "password", inputPlaceholder: "********" })}
        <button class="btn-loginForm" type="submit">Acceder</button>
        `;
    form.addEventListener("submit", loginUser);
};

*/
