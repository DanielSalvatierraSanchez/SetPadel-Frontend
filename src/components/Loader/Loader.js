import "./Loader.css";

export const Loader = () => {
    // const main = document.querySelector("main");
    const loaderContainer = document.createElement("div");
    const loader = document.createElement("img");
    loaderContainer.classList.add("loader-container");
    loader.classList.add("loader");
    loader.src = "../../../public/pelota.png";
    loader.alt = "pelota de padel";
    loaderContainer.append(loader);
    // main.append(loaderContainer);
    return;
};
