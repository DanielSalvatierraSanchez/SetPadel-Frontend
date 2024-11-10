import { API } from "./API";

const URL = "http://localhost:3000/api/v1/appadel";

export const getPadelMatches = async () => {
    try {
        const res = await fetch(URL + "/matches");

        const allPadelMatches = await res.json();
        return allPadelMatches;
    } catch (error) {
        console.error("❌ Error fetch getPadelMatches", error);
        return [];
    }
};
