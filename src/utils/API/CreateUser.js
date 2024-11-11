export const registerUser = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", e.target[0].value);
    formData.append("email", e.target[1].value);
    formData.append("password", e.target[2].value);
    formData.append("phone", e.target[3].value);
    formData.append("image", e.target[4].files[0]);

    try {
        const URL = "http://localhost:3000/api/v1/appadel/users";
        const res = await fetch(URL + "/register", {
            method: "POST",
            body: formData
        });

        const postUser = await res.json();
        console.log("FINAL FELIZ!!! =>", postUser);

        return postUser;
    } catch (error) {
        console.log("Error en el registro del usuario: ", error);
        alert(`Error en el registro: ${error.message}`);
    }
};
