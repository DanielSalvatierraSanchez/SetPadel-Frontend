import "./SuccessMessage.css";

export const successMessage = (parentElement, response) => {
    if (parentElement) {
        let removeError = parentElement.querySelector(".success-message");
        if (removeError) {
            removeError.remove();
        }

        const successMessage = document.createElement("p");
        successMessage.classList.add("success-message");
        successMessage.textContent = response.message;
        parentElement.append(successMessage);
        return;
    }
};
