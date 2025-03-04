import "./Login.css";
import { LoginForm } from "../../components/Forms/LoginForm/LoginForm";
export const Login = () => {
    const div = createPage("Login");
    const form = document.createElement("form");

    div.append(form);
    LoginForm(form);
};
