import { errorMessage } from "../../components/Messages/Error/ErrorMessage";
import { API } from "./API";

export const profileUser = async (e) => {
    e.preventDefault();
    const form = document.querySelector("form");
    const [name, password, phone, image] = e.target;

    const formData = new FormData();
    formData.append("name", name.value.trim());
    formData.append("password", password.value.trim());
    formData.append("phone", phone.value.trim());
    formData.append("image", image?.files[0]);

    const user = JSON.parse(localStorage.getItem("user"))
    const userId = user._id;
    try {
        const res = await API({ endpoint: `/users/update/${userId}`, method: "PUT", body: formData, isJSON: false });
        console.log("res FETCH =>", res);
        if (res.status !== 200) {
            errorMessage(res, form);
        }
    } catch (error) {
        console.log("Error en la actualizacion del usuario: ", error.message);
    }
};
