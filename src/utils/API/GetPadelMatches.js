import { API } from "./API";

export const getPadelMatches = async () => {
    const URL = "http://localhost:3000/api/v1/appadel";
    const res = await fetch(URL + "/matches");
    console.log("response: ", res);

    const allPadelMatches = await res.json();
    console.log("allPadelMatches: ", allPadelMatches);

    // API({ endpoint: "/matches", method: "GET" });
};
