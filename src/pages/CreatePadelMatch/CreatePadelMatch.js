import "./CreatePadelMatch.css";
import { PostPadelMatchForm } from "../../components/Forms/PostPadelMatchForm/PostPadelMatchForm";
import { createPage } from "../../functions/CreatePage";
import { Loader, LoaderOff } from "../../components/Loader/Loader";
import { getToken, isAuth } from "../../utils/IsAuth";

export const CreatePadelMatch = async () => {
    const div = createPage("CreatePadelMatch");

    getToken();
    const createPadelMatchContainer = document.createElement("div");
    createPadelMatchContainer.classList.add("create-padel-match-container");

    Loader(div);
    if (!getToken()) {
        isAuth(div);
        return;
    } else {
        LoaderOff();
    }

    const form = document.createElement("form");
    div.append(form);
    PostPadelMatchForm(form);
};
