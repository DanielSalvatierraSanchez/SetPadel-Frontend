import "./FilterPadelMatches.css";

export const FilterPadelMatches = (parentElement, classInput, typeInput, placeholderInput, classBtn, textBtn) => {
    const filterContainer = document.createElement("div");
    filterContainer.classList.add("filter-container");

    const filterInput = document.createElement("input");
    filterInput.classList.add(`${classInput}`);
    filterInput.type = `${typeInput}`;
    filterInput.min = 1;
    filterInput.max = 31;
    filterInput.placeholder = `${placeholderInput}`;

    const filterButton = document.createElement("button");
    filterButton.classList.add(`${classBtn}`);
    filterButton.textContent = `${textBtn}`;

    const showAllButton = document.createElement("button");
    showAllButton.classList.add("show-all-btn");
    showAllButton.textContent = "Mostrar todos";

    filterContainer.append(filterInput, filterButton, showAllButton);
    parentElement.append(filterContainer);
};
