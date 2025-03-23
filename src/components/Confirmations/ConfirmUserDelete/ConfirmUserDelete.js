import "./ConfirmUserDelete.css";
import { deleteUser } from "../../../utils/API/DeleteUser";
import { ProfileForm } from "../../Forms/ProfileForm/ProfileForm";

export const ConfirmUserDelete = (parentElement, message) => {
    parentElement.innerHTML = `
            <h2 class"title-user-delete">¿Seguro que quieres ${message}?</h2>
            <button class='btn-delete-yes'><img class="img-btn-delete-yes" src="/assets/delete.webp" alt="yes delete user">Sí<img/></button>
            <button class='btn-delete-no'><img class="img-btn-delete-no" src="/assets/back.webp" alt="no delete user">No<img/></button>`;

    const yes = parentElement.querySelector(".btn-delete-yes");
    const no = parentElement.querySelector(".btn-delete-no");

    yes.addEventListener("click", () => {
        yes.disabled = true;
        no.disabled = true;
        deleteUser(parentElement);
    });

    no.addEventListener("click", () => {
        ProfileForm(parentElement);
    });
};
