import { createPage } from "../../functions/CreatePage";
import { deletePadelMatch } from "../../utils/API/DeletePadelMatch";
import { getPadelMatchesByAuthor } from "../../utils/API/GetPadelMatchesByAuthor";
import { isAuth } from "../../utils/isAuth";
import "./DeletePadelMatches.css";

export const DeletePadelMatches = async () => {
    console.log("DELETE PM");
    const div = createPage("DeletePadelMatches");
    div.classList.add("delete-padel-matches");
    div.innerHTML = `<h1>Mis Partidos</h1>`;

    isAuth(div);
    try {
        const myPadelMatches = await getPadelMatchesByAuthor();
        console.log(myPadelMatches);
        const myDeletePadelMatches = await deletePadelMatch();
        console.log(myDeletePadelMatches);
    } catch (error) {
        console.log("Error en DELETE PADEL MATCHES del front: ", error.message);
    }
    return div;
};
