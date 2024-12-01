export const createLinkLogout = (parentElement) => {
    const a = document.createElement("a");
    a.textContent = "Logout";
    a.href = "/logout";
    a.addEventListener("click", () => {
        localStorage.removeItem("token");
        window.location.reload();
    });
    parentElement.append(a);
};
