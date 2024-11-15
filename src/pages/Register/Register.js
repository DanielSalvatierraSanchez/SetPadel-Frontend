import "./Register.css";
import { createPage } from "../../functions/CreatePage";
import { RegisterForm } from "../../components/RegisterForm/RegisterForm";

export const Register = () => {
    const div = createPage("Register");
    const form = document.createElement("form");

    div.append(form);
    RegisterForm(form);
};
