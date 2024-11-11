import { PadelMatches } from "../../pages/PadelMatches/PadelMatches";
import { Button } from "../Button/Button";
import { FieldForm } from "../FieldForm/FieldForm";
import "./LoginForm.css";

export const LoginForm = (form) => {
    form.className = "login-form";
    form.innerHTML = `
    <h2>Login</h2>
        ${FieldForm({ labelText: "Nombre / Email", inputType: "text", inputPlaceholder: "Nombre o Email" })}
        ${FieldForm({ labelText: "Contraseña", inputType: "password", inputPlaceholder: "********" })}
    <button type="submit">Login</button>
    `;
    form.addEventListener("submit", loginUser(e)
    /*(e) => {
        e.preventDefault();
        form[0].value, form[1].value;
    }*/);
    form.append(Button({ text: "Login", fnc: () => {}, className: "btn-loginForm" }));
};


const loginUser = async (e) => {
    // e.preventDefault();
        // const URL = "http://localhost:3000/api/v1/appadel/users";
        const user = { name: e.target[0].value, password: e.target[1].value };
        console.log("User Data =>", user);
        const userJSON = JSON.stringify(user);

        const res = await fetch("http://localhost:3000/api/v1/appadel/users/login", {
            headers: { "Content-Type": "application/json", },
            method: "POST",
            body: userJSON,
        });
        console.log("res fetch =>", res);

        const login = await res.json();
        // e.preventDefault();
        console.log("res FINAL =>", login);
        console.log("Login correcto.");
};
