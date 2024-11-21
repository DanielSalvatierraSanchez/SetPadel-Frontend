import "./SuccessMessage.css";

export const successMessage = (response) => {
    const form = document.querySelector("form");
    if (form) {
        let removeError = form.querySelector(".success-message");
        if (removeError) {
            removeError.remove();
        }

        const successMessage = document.createElement("p");
        successMessage.classList.add("success-message");
        successMessage.textContent = response.message;

        const p = document.createElement("p");
        p.textContent = "CARGANDO PARTIDOS...";
        form.append(successMessage, p);
        return;
    }
};
