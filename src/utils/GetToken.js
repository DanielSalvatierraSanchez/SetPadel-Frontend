export const getToken = () => {
    const token = localStorage.getItem("token");

    if (!token) {
        localStorage.clear();
        window.history.pushState("", "", "/home");
        window.location.reload();
    }
    return token;
};
