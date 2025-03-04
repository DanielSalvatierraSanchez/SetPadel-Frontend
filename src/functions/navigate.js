export const navigate = (e, route) => {
    e.preventDefault();
    console.log(e);
    console.log("Hola desde Navigate");

    window.history.pushState("", "", route.path);

    route.page();
};
