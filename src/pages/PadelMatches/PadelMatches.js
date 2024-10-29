import { createPage } from "../../functions/createPage";
import "./PadelMatches.css";

const URL = "http://localhost:3000/api/v1/appadel";
export const PadelMatches = () => {
    const div = createPage("PadelMatches");
    div.innerHTML = "<h1>Partidos creados</h1>";
    
    const getPadelMatches = async () => {
        const res = await fetch(URL + "/matches")
        console.log("response: ", res);
        
        const padelMatches = await res.json();
        console.log("padelMatches: ", padelMatches);
        
    }
    
    getPadelMatches()
};
