import { Loader } from "../../components/Loader/Loader";
import { errorMessage } from "../../components/Messages/Error/ErrorMessage";
import { Profile } from "../../components/Profile/Profile";
import { isAuth } from "../isAuth";
import { updateUserDataInLocalStorage } from "../SetUserData";
import { API } from "./API";

export const updateProfileUser = async (e) => {
    e.preventDefault();
    const form = document.querySelector("form");
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

    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    const userId = user._id;
    console.log(userId);
    try {
        const div = document.querySelector("#Profile");
        const token = localStorage.getItem("token");
        if (!token) {
            errorMessage(res, div);
            return;
        }
        isAuth(div);

        const res = await API({ endpoint: `/users/update/${userId}`, method: "PUT", body: formData, isJSON: false, token });
        console.log("res FETCH =>", res);

        if (res.status !== 200) {
            errorMessage(res, form);
        }

        const updateData = {};
        if (name.value.trim()) updateData.name = name.value.trim();
        if (image?.files[0]) updateData.image = user.image; // Asumiendo que el servidor devuelve la URL de la imagen

        updateUserDataInLocalStorage(updateData);

        Loader(form);
        setTimeout(() => {
            Profile();
        }, 2000);
    } catch (error) {
        console.log("Error en la actualizacion del usuario: ", error.message);
    }
};
