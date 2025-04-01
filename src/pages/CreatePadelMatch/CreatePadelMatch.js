import "./CreatePadelMatch.css";
import { PostPadelMatchForm } from "../../components/Forms/PostPadelMatchForm/PostPadelMatchForm";
import { Loader } from "../../components/Loader/Loader";
import { isAuth } from "../../utils/IsAuth";
import { createPage } from "../../functions/CreatePage";

export const CreatePadelMatch = async () => {
    const div = createPage("CreatePadelMatch");

    const createPadelMatchContainer = document.createElement("div");
    createPadelMatchContainer.classList.add("create-padel-match-container");

    Loader(div);
    isAuth();

    const form = document.createElement("form");
    div.append(form);
    PostPadelMatchForm(form);
};
