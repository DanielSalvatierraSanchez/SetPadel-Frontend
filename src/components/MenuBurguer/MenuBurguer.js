import "./MenuBurguer.css";

export const MenuBurger = (container, parentElement) => {
    const imgOpen = document.createElement("img");
    const imgClose = document.createElement("img");
    imgOpen.className = "img-open";
    imgClose.className = "img-close";
    imgOpen.src = "/assets/burguer.webp";
    imgClose.src = "/assets/close.webp";
    imgOpen.alt = "open menu burguer";
    imgClose.alt = "close menu burguer";

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
