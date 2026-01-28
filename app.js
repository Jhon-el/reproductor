const titulocan = document.querySelector('.Reproductormp3 h1');

const nombreartist = document.querySelector('.Reproductormp3 h3');

const progreso = document.getElementById('progreso');

const cancion = document.getElementById('cancion');

const btnatras = document.querySelector('.controles button.atras');

const btadelante = document.querySelector('.controles button.siguiente');

const play = document.getElementById('iniciar');

const botonreproducirpausar = document.querySelector('.controles button.iniciar1');

console.log(botonreproducirpausar);

const canciones = [
    {
        titulo: 'Memories',
        artista: 'Maroon 5',
        ruta: 'music/Maroon 5 - Memories.mp3',
    },
    {
        titulo: 'Oh My God',
        artista: 'Low Roar',
        ruta: 'music/Low Roar - Oh My God.mp3',
    },
    {
        titulo: 'gosia',
        artista: 'Low Roar',
        ruta: 'music/Low Roar - Gosia  Sub. Español.mp3',
    },
    {
        titulo: 'Dont Be So Serious',
        artista: 'Low Roar',
        ruta: 'music/Low Roar - Dont Be So Serious  Sub. Español.mp3',
    },
    {
        titulo: 'Labios Rotos',
        artista: 'Zoe',
        ruta: 'music/Labios Rotos - Zoe.mp3',
    },
    {
        titulo: 'Porque te vas',
        artista: 'Jeanette',
        ruta: 'music/Jeanette - Porque te vas.mp3',
    },
    {
        titulo: 'El Muchacho De Los Ojos Triste',
        artista: 'Jeanette',
        ruta: 'music/Jeanette - El Muchacho De Los Ojos Triste.mp3',
    }
];

let indicecancion = 0;
let reproduciendo = false;

function actualizarinfocancion() {
    titulocan.textContent = canciones[indicecancion].titulo;
    nombreartist.textContent = canciones[indicecancion].artista;
    cancion.src = canciones[indicecancion].ruta;
    cancion.addEventListener('loadedmetadata', function() {
        progreso.max = cancion.duration;
        progreso.value = 0;
    });
}

function actualizarProgreso() {
    progreso.value = cancion.currentTime;
}

function cambiarProgreso() {
    cancion.currentTime = progreso.value;
}

botonreproducirpausar.addEventListener('click', togglePlayPause);

function togglePlayPause() {
    if (reproduciendo) {
        cancion.pause();
        reproduciendo = false;
        botonreproducirpausar.innerHTML = '<i class="bi bi-play-fill"></i>';
    } else {
        cancion.play();
        reproduciendo = true;
        botonreproducirpausar.innerHTML = '<i class="bi bi-pause-fill"></i>';
    }
}

btnatras.addEventListener('click', cancionAnterior);

function cancionAnterior() {
    indicecancion = (indicecancion - 1 + canciones.length) % canciones.length;
    actualizarinfocancion();
    if (reproduciendo) {
        cancion.play();
    }
}

btadelante.addEventListener('click', cancionSiguiente);

function cancionSiguiente() {
    indicecancion = (indicecancion + 1) % canciones.length;
    actualizarinfocancion();
    if (reproduciendo) {
        cancion.play();
    }
}

cancion.addEventListener('timeupdate', actualizarProgreso);
progreso.addEventListener('input', cambiarProgreso);

cancion.addEventListener('ended', cancionSiguiente);

actualizarinfocancion();

