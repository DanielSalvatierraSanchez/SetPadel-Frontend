import { Button } from "../../components/Button/Button";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { RegisterForm } from "../../components/RegisterForm/RegisterForm";
import { createPage } from "../../functions/CreatePage";
import "./Login.css";

export const Login = () => {
    const div = createPage("Login");
    const form = document.createElement("form");

    // let showForm = true;
    // const toggleForm = () => {
    //     showForm = !showForm;
    //     showForm ? LoginForm(form) : RegisterForm(form);
    // };

    // div.append(
    //     Button({
    //         text: "Login / Registro",
    //         fnc: () => toggleForm(),
    //         className: "btn-login"
    //     }),
    //     form
    // );
    div.append(form); // AÑADIR SOLO FORMULARIO SIN BUTTON

    LoginForm(form);
};
