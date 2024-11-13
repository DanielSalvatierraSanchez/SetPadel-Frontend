import { URL } from "./API";

export const loginUser = async (e) => {
    e.preventDefault();

    const user = {
        // name: e.target[0].value,
        email: e.target[0].value,
        password: e.target[1].value
    };
    console.log("User Data =>", user);

    try {
        const userJSON = JSON.stringify(user);

        const res = await fetch(URL + "/users/login", {
            headers: { "Content-Type": "application/json" },
            method: "POST",
            body: userJSON
        });
        console.log(res);
        
        const postLogin = await res.json();
        console.log("FINAL FELIZ =>", postLogin);

        localStorage.setItem("token", postLogin.token);
        // window.location.href = "/home";

        return postLogin;
    } catch (error) {
        console.log("Error en el login del usuario: ", error);
        alert(`Error en el login: ${error.message}`);
    }
};
