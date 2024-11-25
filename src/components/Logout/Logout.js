import "./Logout.css";

export const Logout = () => {
    const nav = document.querySelector("nav");

    const a = document.createElement("a");
    a.textContent = "Logout";
    a.href = "/logout";
    a.addEventListener("click", (e) => {
        navigate(e, Logout);
    });
    nav.append(a);
};
