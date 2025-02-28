import { Loader } from "../../Loader/Loader";
import { Filter } from "../Filter/Filter";
import { getUncompletedPadelMatches } from "../../../utils/API/GetUncompletedPadelMatches";
import { FilterOfUncompletedPadelMatches } from "../FilterOfUncompletedPadelMatches/FilterOfUncompletedPadelMatches";
import { getPadelMatches } from "../../../utils/API/GetPadelMatches";
import { CardOfPadelMatch } from "../../CardOfPadelMatch/CardOfPadelMatch";

export const FilterPadelMatches = (container, parentElement) => {
    parentElement.innerHTML = "";
    Filter(container, "Sólo disponibles");

    const filterButton = container.querySelector(".btn-filter-uncompleted");
    const showAllButton = container.querySelector(".btn-show-all");

    filterButton.addEventListener("click", async () => {
        parentElement.innerHTML = "";
        filterButton.disabled = true;
        showAllButton.disabled = true;

        Loader(container);
        setTimeout(() => {
            filterButton.disabled = false;
            showAllButton.disabled = false;
        }, 2000);

        const uncompletedPadelMatches = await getUncompletedPadelMatches();
        FilterOfUncompletedPadelMatches(parentElement, uncompletedPadelMatches.uncompletedPadelMatches);
    });

    showAllButton.addEventListener("click", async () => {
        parentElement.innerHTML = "";
        showAllButton.disabled = true;
        filterButton.disabled = true;

        Loader(container);
        setTimeout(() => {
            filterButton.disabled = false;
            showAllButton.disabled = false;
        }, 2000);

        const allPadelMatch = await getPadelMatches();
        const { allPadelMatches } = allPadelMatch;
        CardOfPadelMatch(parentElement, allPadelMatches);
    });
};
