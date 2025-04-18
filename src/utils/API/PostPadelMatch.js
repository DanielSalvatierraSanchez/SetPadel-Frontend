import { Loader } from "../../components/Loader/Loader";
import { errorMessage } from "../../components/Messages/Error/ErrorMessage";
import { successMessage } from "../../components/Messages/Success/SuccessMessage";
import { PadelMatches } from "../../pages/PadelMatches/PadelMatches";
import { isAuth } from "../IsAuth";
import { randomMessageError } from "../RandomMessageError";
import { API } from "./API";

export const postPadelMatch = async (e) => {
    e.preventDefault();
    const container = document.querySelector(".postPadelMatch-form");

    const [title, location, date, place, image] = e.target;

    const formData = new FormData();
    formData.append("title", title.value);
    formData.append("location", location.value);
    formData.append("date", date.value);
    formData.append("place", place.value);
    formData.append("image", image?.files[0]);

    const form = document.querySelector("form");
    if (!title.value || !location.value || !date.value) {
        randomMessageError(form, "Todos los campos son obligatorios");
        return;
    }

    isAuth(container);

    try {
        const token = localStorage.getItem("token");

        const res = await API({ endpoint: "/matches/register", method: "POST", isJSON: false, body: formData, token });
        !res ? errorMessage(container, res) : successMessage(container, res);

        Loader(container);
        setTimeout(() => {
            window.history.pushState("", "", "/padel_matches");
            PadelMatches();
        }, 1000);

        return res;
    } catch (error) {
        console.log("Error en el POST de un partido desde el front:", error.message);
    }
};
