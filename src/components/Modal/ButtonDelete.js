import { ConfirmPadelMatchDelete } from "../Confirmations/ConfirmPadelMatchDelete/ConfirmPadelMatchDelete";

export const buttonDelete = (parentElement, data) => {
    const deleteBtn = parentElement.querySelector(".img-delete-padel-match");
    const container = document.querySelector(".padel-match-container");

    deleteBtn.addEventListener("click", async (e) => {
        e.preventDefault();
        e.stopPropagation();
        container.classList.add("confirm-delete-padel-match");

        ConfirmPadelMatchDelete(container, data, "eliminar el partido");
    });
};
