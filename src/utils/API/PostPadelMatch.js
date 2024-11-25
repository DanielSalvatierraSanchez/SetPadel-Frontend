import { API } from "./API";

export const postPadelMatch = async (e) => {
    e.preventDefault();
    const [title, location, date, day, month, hour, place, image, author] = e.target;
    console.log(date.value);

    const formData = new FormData();
    formData.append("title", title.value);
    formData.append("location", location.value);
    formData.append("date", `${date.value}-${month.value}-${day.value}T${hour.value}:00`);
    formData.append("place", place.value);
    formData.append("image", image?.files[0]);
    console.log(formData);

    try {
        const res = await API({ endpoint: "/matches/register", method: "POST", isJSON: false, body: formData });
        console.log(res);
    } catch (error) {
        console.log("Error en la creación de un partido:", error.message);
    }
};
