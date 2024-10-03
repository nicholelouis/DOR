const api = 'https://ddragon.leagueoflegends.com/cdn/13.18.1/data/es_ES/champion.json';

fetch(api)
    .then(response => {
        if (!response.ok) {
            return 'error';
        }
        return response.json();
    })
    .then(data => {
        console.log(data); 
    })
    .catch(error => {
        console.log('error');
    });
    