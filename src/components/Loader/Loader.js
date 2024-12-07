import "./Loader.css";

export const Loader = (parentElement) => {
    const loaderContainer = document.createElement("div");
    const loader = document.createElement("img");
    loaderContainer.classList.add("loader-container");
    loader.classList.add("loader");
    loader.src = "../../../public/pelota.png";
    loader.alt = "pelota de padel";
    loaderContainer.append(loader);
    parentElement.append(loaderContainer);
    // setTimeout(() => {LoaderOff()}, 1000)
    return;
};

export const LoaderOff = () => {
    const loaderContainer = document.querySelector(".loader-container");
    if (loaderContainer) {
        loaderContainer.remove();
    }
    return;
};
