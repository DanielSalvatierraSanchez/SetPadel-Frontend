import "./MenuBurguer.css";

export const MenuBurger = (container, parentElement) => {
    const imgOpen = document.createElement("img");
    const imgClose = document.createElement("img");
    imgOpen.className = "img-open";
    imgClose.className = "img-close";
    imgOpen.src = "/assets/burguer.png";
    imgClose.src = "/assets/close.png";

    imgOpen.addEventListener("click", () => {
        parentElement.classList.add("visible");
    });
    
    parentElement.addEventListener("mouseleave", () => {
        parentElement.classList.remove("visible");
    })

    imgClose.addEventListener("click", () => {
        parentElement.classList.remove("visible");
    });

    parentElement.append(imgClose);
    container.append(imgOpen);
};
