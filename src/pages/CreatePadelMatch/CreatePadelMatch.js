import "./CreatePadelMatch.css";
import { PostPadelMatchForm } from "../../components/PostPadelMatch/PostPadelMatchForm";
import { createPage } from "../../functions/CreatePage";
import { errorMessage } from "../../components/Messages/Error/ErrorMessage";

export const CreatePadelMatch = () => {
    const div = createPage("CreatePadelMatch");
    div.innerHTML = `<h1>Crea un Partido de Padel</h1>`;

    const createPadelMatchContainer = document.createElement("div");
    createPadelMatchContainer.classList.add("create-padel-match-container");

    const token = localStorage.getItem("token");
    if (token) {
        const form = document.createElement("form");
        PostPadelMatchForm(form);
    }
    errorMessage();

    div.append(form);
};
