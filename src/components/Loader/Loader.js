export const Loader = () => {
    const body = document.querySelector('body');
    const loaderContainer = document.createElement("div");
    const loader = document.createElement("span");
    loaderContainer.classList.add("loader-container");
    loader.classList.add("loader");
    loaderContainer.append(loader);
}