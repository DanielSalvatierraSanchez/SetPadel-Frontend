import { Loader } from "../../components/Loader/Loader";
import { errorMessage } from "../../components/Messages/Error/ErrorMessage";
import { successMessage } from "../../components/Messages/Success/SuccessMessage";
import { Profile } from "../../components/Profile/Profile";
import { isAuth } from "../isAuth";
import { updateUserDataInLocalStorage } from "../SetUserData";
import { API } from "./API";

export const updateProfileUser = async (e) => {
    e.preventDefault();
    const container = document.querySelector("form");
    const [name, password, phone, image] = e.target;
    const formData = new FormData();
    if (name.value.trim()) {
        formData.append("name", name.value.trim());
    }
    if (password.value.trim()) {
        formData.append("password", password.value.trim());
    }
    if (phone.value.trim()) {
        formData.append("phone", phone.value.trim());
    }
    if (image?.files[0]) {
        formData.append("image", image.files[0]);
    }

    try {
        const user = JSON.parse(localStorage.getItem("user"));
        const userId = user._id;
        const token = localStorage.getItem("token");

        isAuth(container);

        const res = await API({ endpoint: `/users/update/${userId}`, method: "PUT", body: formData, isJSON: false, token });
        !res ? errorMessage(container, res) : successMessage(container, res);

        const updateData = {};
        if (name.value.trim()) updateData.name = name.value.trim();
        if (image?.files[0]) updateData.image = user.image; // Asumiendo que el servidor devuelve la URL de la imagen

        updateUserDataInLocalStorage(updateData);

        Loader(container);
        setTimeout(() => {
            Profile();
        }, 2000);
    } catch (error) {
        console.log("Error en el UPDATE del usuario desde el front: ", error.message);
    }
};
