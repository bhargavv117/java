const image = document.getElementById('cover'),
title = document.getElementById('music-title'),
artist = document.getElementById('music-artist'),
currentTimeEL = document.getElementById('current-time'),
durationEL = document.getElementById('duration'),
progress = document.getElementById('progress'),
playerProgress = document.getElementById('player-progress'),
prevBtn= document.getElementById('prev'),
nextBtn = document.getElementById('next'),
playBtn= document.getElementById('play'),
background = document.getElementById('bg-img');

const music = new Audio();

const song = [
    {
        path : '1.mp3',
        displayName : 'Ranjha',
        cover : '1.jpg',
        artist : 'Jasleen Royal',
    },
    {
        path : '2.mp3',
        displayName : 'Sanam teri kasam',
        cover : '2.jpg',
        artist : 'sanam teri kasam',
    },
    {
        path : '3.mp3',
        displayName : 'sanu ek pal chain',
        cover : '3.jpg',
        artist : 'Rohan fateh ali khan',
    },
    {
        path : '4.mp3',
        displayName : 'Aa jao meri tamanna',
        cover : '4.jpg',
        artist : 'Pritam chakraborty',
    }
];

let musicIndex = 0;
let isPlaying = false;

function togglePlay(){
    if(isPlaying){
        pauseMusic();
    }else{
        playMusic();
    }
}

function playMusic(){
    isPlaying = true;

    playBtn.classList.replace('fa-play','fa-pause');

    playBtn.setAttribute('title','Pause');

    music.play();
}

function pauseMusic(){
    isPlaying = false;

    playBtn.classList.replace('fa-pause','fa-play');

    playBtn.setAttribute('title','Play');

    music.pause();
}

function loadMusic(song){
    music.src = song.path;
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    image.src =song.cover;
    background.src = song.cover;
}

function changeMusic(direction){
    musicIndex = (musicIndex + direction + song.length)%song.length;
    loadMusic(song[musicIndex]);
    playMusic();
}

function updateProgressBar(){
    const{ duration , currentTime } = music;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;

    const formatTime = (time) => String(Math.floor(time)).padStart(2, '0');
    durationEL.textContent = `${formatTime(duration / 60)}:${formatTime(duration % 60)}`;
    currentTimeEL.textContent = `${formatTime(currentTime /60)}:${formatTime(currentTime % 60)}`;

}

function setProgressBar (e){
    const width = playerProgress.clientWidth;
    const clickX = e.offsetX;
    music.currentTime = (clickX / width) * music.duration;
}

playBtn.addEventListener('click',togglePlay);
prevBtn.addEventListener('click',()=> changeMusic(-1));
nextBtn.addEventListener('click',()=> changeMusic(1));
music.addEventListener('ended',()=>changeMusic(1));
music.addEventListener('timeupdate',updateProgressBar);
playerProgress.addEventListener('click',setProgressBar);

loadMusic(song[musicIndex]);