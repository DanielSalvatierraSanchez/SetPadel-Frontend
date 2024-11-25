export const setUserDataToLocalStore = (res) => {
    const { _id, email, image } = res.user;
    localStorage.setItem("token", res.token);
    localStorage.setItem("user", JSON.stringify({ _id, email, image }));
};
