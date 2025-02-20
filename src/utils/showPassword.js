export const showPassword = () => {
    const observer = document.querySelector(".bx");
    observer.addEventListener("click", () => {
        const inputPassword = document.querySelector(".input-password");
        if (inputPassword.type === "password") {
            inputPassword.type = "text";
            observer.classList.remove("bx-show");
            // observer.classList.add("bx-hide");
        } else {
            inputPassword.type = "password";
            observer.classList.add("bx-show");
            // observer.classList.remove("bx-hide");
        }
    });
};
