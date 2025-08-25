let songs = [
  { title: "Song 1", src: "songs/song1.webm" },
  { title: "Song 2", src: "songs/song2.webm" },
  { title: "Song 3", src: "songs/song3.webm" }
];

let currentSong = 0;
let audio = document.getElementById("audio");
let title = document.getElementById("songTitle");

function loadSong(index) {
  audio.src = songs[index].src;
  title.textContent = songs[index].title;
  audio.play();
}

function nextSong() {
  currentSong = (currentSong + 1) % songs.length;
  loadSong(currentSong);
}

function prevSong() {
  currentSong = (currentSong - 1 + songs.length) % songs.length;
  loadSong(currentSong);
}

document.getElementById("playBtn").addEventListener("click", () => audio.play());
document.getElementById("pauseBtn").addEventListener("click", () => audio.pause());
document.getElementById("nextBtn").addEventListener("click", nextSong);
document.getElementById("prevBtn").addEventListener("click", prevSong);

loadSong(currentSong);
