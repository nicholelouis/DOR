export default class Song {
    constructor(k_song, v_song, c_song) {
        this.element = document.querySelector(k_song);  
        this.audio = new Audio(v_song);  
        this.album = document.querySelector(c_song); 
    }
}

export function play_song(song) {
    // Referencia al disco (vinyl) correspondiente al contenedor (item) de la canción
    const disc = song.element.querySelector('.vinyl');

    song.element.onclick = () => {
        if (song.audio.paused) {
            song.audio.play();  // Reproduce la canción
            disc.classList.add('visible');  // Muestra el disco
        } else {
            song.audio.pause();  // Pausa la canción
            disc.classList.remove('visible');  // Oculta el disco
        }
    };
}

