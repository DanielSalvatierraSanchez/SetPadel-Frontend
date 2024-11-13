import { URL } from "./API";

export const getPadelMatches = async () => {
    const res = await fetch(URL + "/matches");
    console.log("response: ", res);

    const allPadelMatches = await res.json();
    console.log("allPadelMatches: ", allPadelMatches);
    return allPadelMatches;
};
