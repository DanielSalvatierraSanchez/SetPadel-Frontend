import "./Filter.css";

export const Filter = (parentElement, textBtn) => {
    const filterContainer = document.createElement("div");
    const filterButton = document.createElement("button");
    const showAllButton = document.createElement("button");

    filterContainer.classList.add("filter-container");
    filterButton.classList.add("btn-filter-uncompleted");
    showAllButton.classList.add("btn-show-all");
    filterButton.textContent = `${textBtn}`;
    showAllButton.textContent = "Mostrar todo";

    filterContainer.append(filterButton, showAllButton);
    parentElement.append(filterContainer);
};
