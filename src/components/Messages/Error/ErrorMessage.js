import "./ErrorMessage.css"

export const errorMessage = (response) => {
    const form = document.querySelector("form");
    if (form) {
        let removeError = form.querySelector(".error-message");
        if (removeError) {
            removeError.remove();
        };

        const errorMessage = document.createElement("p");
        errorMessage.classList.add("error-message");
        errorMessage.textContent = response.message;
        form.append(errorMessage);
        return;
    }
}