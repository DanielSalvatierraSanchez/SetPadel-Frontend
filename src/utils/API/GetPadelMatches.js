import { API } from "./API";

const URL = "http://localhost:3000/api/v1/appadel";

export const getPadelMatches = async () => {
    const res = await fetch(URL + "/matches")
    console.log("response: ", res);
    
    const allPadelMatches = await res.json();
    console.log("allPadelMatches: ", allPadelMatches);

    // API({ endpoint: "/matches", method: "GET" });
};
