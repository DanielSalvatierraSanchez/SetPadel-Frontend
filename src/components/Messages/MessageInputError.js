import "../Messages/Error/ErrorMessage.css";

export const messageInputError = (parentElement, message) => {
    if (parentElement) {
        let removeError = parentElement.querySelector(".error-message");
        if (removeError) {
            removeError.remove();
        }

        const errorMessage = document.createElement("p");
        errorMessage.classList.add("error-message");
        errorMessage.textContent = message;
        parentElement.append(errorMessage);

        setTimeout(() => {
            errorMessage.remove();
        }, 2000);
        return;
    }
};
