import "./CreatePadelMatch.css";
import { PostPadelMatchForm } from "../../components/PostPadelMatch/PostPadelMatchForm";
import { createPage } from "../../functions/CreatePage";

export const CreatePadelMatch = () => {
    const div = createPage("CreatePadelMatch");
    div.innerHTML = `<h1>Crea un Partido de Padel</h1>`;

    const form = document.createElement("form");

    const token = localStorage.getItem("token");
    if (token) {
        PostPadelMatchForm(form);
    }

    div.append(form);
};
