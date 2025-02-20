import "./UserDelete.css"
import { Logout } from "../../pages/Logout/Logout";
import { deleteUser } from "../../utils/API/DeleteUser";

export const UserDelete = ({ parentElement, message }) => {
    parentElement.innerHTML = `
            <h2>¿Seguro que quieres ${message}?</h2>
            <button class='btn-delete-yes'><img class="img-delete-yes" src="/assets/yes.png">Sí<img/></button>
            <button class='btn-delete-no'><img class="img-delete-no" src="/assets/close.png">No<img/></button>`;

    const yes = parentElement.querySelector(".btn-delete-yes");
    const no = parentElement.querySelector(".btn-delete-no");

    yes.addEventListener("click", () => {
        deleteUser();
    });

    no.addEventListener("click", () => {
        Logout();
    });
}