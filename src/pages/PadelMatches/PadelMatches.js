import "./PadelMatches.css";
import { createPage } from "../../functions/CreatePage";
import { getPadelMatches } from "../../utils/API/GetPadelMatches";
import { getToken, isAuth } from "../../utils/isAuth";
import { Loader } from "../../components/Loader/Loader";
import { joinPadelMatch } from "../../utils/API/JoinPadelMatch";

export const PadelMatches = async () => {
    const div = createPage("PadelMatches");
    div.innerHTML = `<h1>Partidos de Padel</h1>`;

    getToken();
    const allPadelMatches = await getPadelMatches();

    const padelMatchContainer = document.createElement("div");
    padelMatchContainer.classList.add("padel-match-container");

    Loader(div);
    if (!getToken()) {
        isAuth(div);
        return;
    }

    allPadelMatches.allPadelMatches.forEach((padelMatch) => {
        const padelMatchCard = document.createElement("div");
        padelMatchCard.classList.add("padel-match-card");
        localStorage.setItem("allPadelMatches", JSON.stringify(allPadelMatches.allPadelMatches));

        // if (padelMatch.players.length >= 4) {
        //     console.log("padelMatch.players.length =>",padelMatch.players.length);
        //     alert("partido completo");
        //     return;
        // }

        const isFull = padelMatch.players.length >= 4;

        padelMatchCard.innerHTML = `
            <h3>${padelMatch.title}</h3>
            <img class="padel-match-card-image" src=${padelMatch.image}>
            <p>${padelMatch.date}</p>
            <p>Lugar: ${padelMatch.location}</p>
            <p>Pista: ${padelMatch.place}</p>
            <p>Creador: ${padelMatch.author?.name}</p>
            <button class="join-btn" data-id="${padelMatch._id}" ${isFull ? "disable" : ""}><img src="/assets/player.png">${isFull ? "PARTIDO COMPLETO" : "UNIRSE"}</button>
            <p>Asistentes: ${padelMatch.players}</p>
            `;

        padelMatchContainer.append(padelMatchCard);
        div.append(padelMatchContainer);
    });

    const joinBtn = document.querySelectorAll(".join-btn");
    joinBtn.forEach((button) => {
        button.addEventListener("click", (e) => {
            const userData = JSON.parse(localStorage.getItem("user"));
            const padelMatchData = JSON.parse(localStorage.getItem("allPadelMatches"));
            console.log("padelMatchData =>",padelMatchData);
            
            console.log("userData =>", userData);
            console.log("NAME userData =>", userData.name);

            

            // eliminar join btn o poner otro src
            // joinPadelMatch(padelMatchId);
        });
    });

    return div;
};

/*
<p>Fecha: ${padelMatch.day} de ${padelMatch.month}</p>
<p>Hora: ${padelMatch.hour}</p>

const playerPadelMatch = document.createElement("img");
        playerPadelMatch.classList.add("player-padel-match");
        playerPadelMatch.src = "/assets/player.png";

        playerPadelMatch.addEventListener("click", () => {
            playerPadelMatch.classList.toggle("disable")
            const groupPadelMatch = document.createElement("img");
            groupPadelMatch.classList.add("group-padel-match");
            groupPadelMatch.src = "/assets/players.png";
            padelMatchCard.append(groupPadelMatch)
        })
padelMatchCard.append(playerPadelMatch);
*/
