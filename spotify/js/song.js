export default class Song {
    constructor (k_song, v_song, c_song){
        this.element = document.querySelector(k_song);
        this.audio = new Audio(v_song);
        this.album = document.querySelector(c_song);
    }
};

const disc = document.querySelector('.vinyl');
export function play_song(song){
    song.element.onclick = () => {
        if (song.audio.paused) {
            song.audio.play();
            disc.classList.add('visible');
        }
        else{
            song.audio.pause();
            disc.classList.remove('visible');
        }
    }
};