import "./SuccessMessage.css";

export const successMessage = (response, parentElement) => {
    // const form = document.querySelector("form");
    if (parentElement) {
        let removeError = parentElement.querySelector(".success-message");
        if (removeError) {
            removeError.remove();
        }

        const successMessage = document.createElement("p");
        successMessage.classList.add("success-message");
        successMessage.textContent = response.message;

        // const p = document.createElement("p");
        // p.textContent = "CARGANDO PARTIDOS...";
        // parentElement.append(successMessage, p);
        parentElement.append(successMessage);
        return;
    }
};
