import Warrior from "./warriors.js";

const button = document.querySelector("button");
button.addEventListener("click", () => {
    document.querySelector('#button').style.visibility = 'hidden';
    document.querySelector('#cards').style.visibility = 'visible'; 
    startLol();
});

//-----------------------------------------------------
let allwarriors = [];

const startLol = async () => {
    const api = 'https://ddragon.leagueoflegends.com/cdn/13.18.1/data/es_ES/champion.json';

    try {
        const response = await fetch(api);
        if (!response.ok) {
            throw new Error('Error en la respuesta de la API');
        }

        const data = await response.json();
        const warriors = data.data;

        Object.keys(warriors).forEach(character => {
            allwarriors.push(new Warrior(warriors[character]));
        });
        
        await showWarriors();

    } catch (error) {
        console.error('Error:', error);
    }
};

// -----------------------------------------------------

const showWarriors = async () => {
    const container = document.getElementById("cards");  
    container.innerHTML = ''; 

    for (let i = 0; i < allwarriors.length; i++) {
        container.innerHTML += `
            <div class="card">
                <img src="${allwarriors[i].img}" class="card-image">
                <h1><b>${allwarriors[i].name}</b></h1>
                <div class="card-front">
                <h2 class="front back-content"> ${allwarriors[i].title}</h2>
                <p class="front back-content"> ${allwarriors[i].intro}</p>
                <p class="back-content"> <b>Attack</b>: ${allwarriors[i].attack}</br>
                 <b>Defense</b>: ${allwarriors[i].defense}</br>
                 <b>Magic</b>: ${allwarriors[i].magic}</br>
                 <b>Difficulty</b>: ${allwarriors[i].difficulty}</p>
                </div>
                <div class="types">
                ${allwarriors[i].partype}
                </div>
            </div>`;
    }
};