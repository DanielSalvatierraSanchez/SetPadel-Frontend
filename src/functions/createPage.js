export const createPage = (id) => {
    const main = document.querySelector("main");
    const div = document.createElement("div");
    console.log("Hola desde CreatePage");

    main.innerHTML = "";
    div.id = id;

    main.append(div);
    return div;
};
