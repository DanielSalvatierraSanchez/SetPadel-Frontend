import { Button } from "../../components/Button/Button";
import { PostPadelMatch } from "../../components/PostPadelMatch/PostPadelMatchForm";
import { createPage } from "../../functions/CreatePage";
import "./CreatePadelMatch.css";

export const CreatePadelMatch = () => {
    const div = createPage("CreatePadelMatch");

    const form = document.createElement("form");
    const title = document.createElement("h1");
    title.textContent = "Crea un Partido de Padel";

    PostPadelMatch(form);

    div.append(title, form, 
        // Button({ text: "Crear Partido", fnc: async () => {}, className: "btn-postPadelMatchForm" })
    );
};
