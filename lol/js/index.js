const api = 'https://ddragon.leagueoflegends.com/cdn/13.18.1/data/es_ES/champion.json';

let allwarriors = []
fetch(api)
    .then(response => {
        if (!response.ok) {
            return 'error';
        }
        return response.json();
    })
    .then(data => {
        const warriors = data.data

        Object.keys(warriors).forEach(warrior)
        allwarriors.push(warrior)
    })



    