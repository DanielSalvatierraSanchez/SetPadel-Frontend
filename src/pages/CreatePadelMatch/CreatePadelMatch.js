import "./CreatePadelMatch.css";
import { PostPadelMatchForm } from "../../components/PostPadelMatch/PostPadelMatchForm";
import { createPage } from "../../functions/CreatePage";
import { getToken, isAuth } from "../../utils/isAuth";

export const CreatePadelMatch = async () => {
    const div = createPage("CreatePadelMatch");
    div.innerHTML = `<h1>Crea un Partido de Padel</h1>`;

    getToken();
    const createPadelMatchContainer = document.createElement("div");
    createPadelMatchContainer.classList.add("create-padel-match-container");

    if (!getToken()) {
        isAuth(div);
        return;
    }

    const form = document.createElement("form");
    div.append(form);
    PostPadelMatchForm(form);
};
