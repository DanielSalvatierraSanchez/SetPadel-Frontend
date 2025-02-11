import { Loader, LoaderOff } from "../../components/Loader/Loader";
import { errorMessage } from "../../components/Messages/Error/ErrorMessage";
import { successMessage } from "../../components/Messages/Success/SuccessMessage";
import { PadelMatches } from "../../pages/PadelMatches/PadelMatches";
import { isAuth } from "../isAuth";
import { randomMessageError } from "../RandomMessageError";
import { API } from "./API";

export const postPadelMatch = async (e) => {
    e.preventDefault();
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

    try {
        const div = document.querySelector("#CreatePadelMatch");
        const token = localStorage.getItem("token");

        isAuth(div);

        const res = await API({ endpoint: "/matches/register", method: "POST", isJSON: false, body: formData, token });
        console.log("res post PM API =>", res);

        Loader(div);
        successMessage(res, form);
        setTimeout(() => {
            LoaderOff();
        }, 1000);
        setTimeout(() => {
            window.history.pushState("", "", "/padel_matches");
            PadelMatches();
        }, 1000);

        // return res;
    } catch (error) {
        console.log("Error en el POST de un partido desde el front:", error.message);
    }
};
