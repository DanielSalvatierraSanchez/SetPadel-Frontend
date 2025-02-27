import { PadelMatches } from "../../../pages/PadelMatches/PadelMatches";
import { Loader } from "../../Loader/Loader";
import { Filter } from "../Filter/Filter";
import { getUncompletedPadelMatches } from "../../../utils/API/GetUncompletedPadelMatches";
import { FilterOfUncompletedPadelMatches } from "../FilterOfUncompletedPadelMatches/FilterOfUncompletedPadelMatches";

export const FilterPadelMatches = (parentElement) => {
    parentElement.innerHTML = "";
    const container = parentElement.querySelector(".padel-matches");
    Filter(parentElement, "Sólo disponibles");

    const filterButton = parentElement.querySelector(".btn-filter-uncompleted");
    const showAllButton = parentElement.querySelector(".btn-show-all");

    filterButton.addEventListener("click", async () => {
        console.log("CLICK EN FILTRO");
        parentElement.innerHTML = "";
        Filter(parentElement, "Solo disponibles");
        Loader(parentElement);

        const uncompletedPadelMatches = await getUncompletedPadelMatches();
        FilterOfUncompletedPadelMatches(parentElement, uncompletedPadelMatches.uncompletedPadelMatches);
    });

    showAllButton.addEventListener("click", async () => {
        console.log("CLICK EN MOSTRAR TODO");
        
        PadelMatches();
    });
};
