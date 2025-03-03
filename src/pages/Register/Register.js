import "./Register.css";
import { createPage } from "../../functions/createPage";
import { RegisterForm } from "../../components/Forms/RegisterForm/RegisterForm";

export const Register = () => {
    const div = createPage("Register");
    const form = document.createElement("form");

    div.append(form);
    RegisterForm(form);
};
