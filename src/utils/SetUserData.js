export const setUserDataInLocalStore = (res) => {
    const { _id, name, email, image } = res.user;
    localStorage.setItem("token", res.token);
    localStorage.setItem("user", JSON.stringify({ _id, name, email, image }));
};

export const updateUserDataInLocalStorage = (userNewData) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const userUpdated = { ...user, ...userNewData };
    localStorage.setItem("user", JSON.stringify(userUpdated));
};
