import { LoginForm } from "../../components/LoginForm/LoginForm";
import { createPage } from "../../functions/CreatePage";
import "./Login.css";

export const Login = () => {
    const div = createPage("Login");
    const form = document.createElement("form");

    div.append(form);
    LoginForm(form);
};
