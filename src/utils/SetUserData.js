export const setUserDataToLocalStore = (res) => {
    const { _id, name, email, image } = res.user;
    localStorage.setItem("token", res.token);
    localStorage.setItem("user", JSON.stringify({ _id, name, email, image }));
};
