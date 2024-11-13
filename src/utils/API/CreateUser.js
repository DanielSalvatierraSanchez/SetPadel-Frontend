import { URL } from "./API";

export const registerUser = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", e.target[0].value);
    formData.append("email", e.target[1].value);
    formData.append("password", e.target[2].value);
    formData.append("phone", e.target[3].value);
    formData.append("image", e.target[4].files[0]);

    try {
        const res = await fetch(URL + "/users/register", {
            method: "POST",
            body: formData
        });

        const postUser = await res.json();
        console.log("FINAL FELIZ!!! =>", postUser);
        if (res.status !== 201) {
            alert(postUser.message);
        }

        return postUser;
    } catch (error) {
        console.log("Error en el registro del usuario: ", error);
        alert(`Error en el registro: ${error.message}`);
    }
};
