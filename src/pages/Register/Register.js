import "./Register.css";
import { RegisterForm } from "../../components/Forms/RegisterForm/RegisterForm";
import { createPage } from "../../functions/CreatePage";

export const Register = () => {
    const div = createPage("Register");
    const form = document.createElement("form");

    div.append(form);
    RegisterForm(form);
};
