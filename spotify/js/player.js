import Song, { play_song } from './song.js';

export default class Player {
    constructor(map) {
        let aux = 1;

        
        for (const [key, value] of Object.entries(map)) {
            const s_key = key;  
            const s_value = value;  
            const s_cover = `.cover${aux}`;  

            
            const song = new Song(s_key, s_value, s_cover);

            
            play_song(song);

            aux++;
        }
    }
}
