export const buttonDelete = (parentElement, data) => {
    const deleteBtn = parentElement.querySelector(".img-delete-padel-match");
    deleteBtn.addEventListener("click", async (e) => {
        e.preventDefault();
        e.stopPropagation();

        const confirmDelete = confirm("¿Estás seguro que quieres eliminar el partido?");
        // const myDeletePadelMatches = await deletePadelMatch();
        // console.log(myDeletePadelMatches);

        // parentElement.innerHTML = ""
        // parentElement.innerHTML = `
        // <h2>¿Estás seguro de querer eliminar este partido de padel?</h2>
        // <p>Esta acción no se puede deshacer.</p>
        // <div class="btn-container">
        //     <button class="btn-delete-yes">Sí</button>
        //     <button class="btn-delete-no">No</button>
        // </div>
        // `;
    });
};
