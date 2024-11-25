import "./Loader.css";

export const Loader = () => {
    const container = document.querySelector("form");
    const loaderContainer = document.createElement("div");
    const loader = document.createElement("img");
    loaderContainer.classList.add("loader-container");
    loader.classList.add("loader");
    loader.src = "../../../public/pelota.png";
    loader.alt = "pelota de padel";
    loaderContainer.append(loader);
    container.append(loaderContainer);
    return;
};
