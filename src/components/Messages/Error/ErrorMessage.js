import "./ErrorMessage.css";

export const errorMessage = (response, parentElement) => {
    if (parentElement) {
        let removeError = parentElement.querySelector(".error-message");
        if (removeError) {
            removeError.remove();
        }

        const errorMessage = document.createElement("p");
        errorMessage.classList.add("error-message");
        errorMessage.textContent = response.message;
        parentElement.append(errorMessage);

        setTimeout(() => {
            errorMessage.remove();
        }, 1000);
        return;
    }
};
