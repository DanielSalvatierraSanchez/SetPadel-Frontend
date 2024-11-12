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

        const URL = "http://localhost:3000/api/v1/appadel/users";
        const res = await fetch(URL + "/login", {
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
