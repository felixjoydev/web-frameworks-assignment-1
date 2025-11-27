let songs = [
    { title: "Here Comes The Sun", vinyl: "/images/purple-vinyl.svg" },
    { title: "Let It Be",          vinyl: "/images/black-vinyl.svg" },
    { title: "Come Together",      vinyl: "/images/orange-vinyl.svg" },
    { title: "Hey Jude",           vinyl: "/images/red-vinyl.svg" },
    { title: "Twist and Shout",    vinyl: "/images/yellow-vinyl.svg" },
    { title: "A Day In The Life",  vinyl: "/images/blue-vinyl.svg" },
  ];
  

  const playlistEl = document.querySelector(".playlist-items");
  const shuffleBtn = document.querySelector(".btn-shuffle");


  function renderPlaylist() {
    playlistEl.innerHTML = "";
  
 
    songs.forEach((song) => {
      const div = document.createElement("div");
      div.className = "songs";
      div.innerHTML = `
        <img src="${song.vinyl}" />
        <p>${song.title}</p>
      `;
      playlistEl.appendChild(div);
    });
  }
  
  renderPlaylist();
  
  shuffleBtn.addEventListener("click", (event) => {
    event.preventDefault();
    shuffleSongs();
    renderPlaylist();
  });

  function shuffleSongs() {
    for (let i = songs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [songs[i], songs[j]] = [songs[j], songs[i]];
    }
  }

const addForm = document.querySelector(".playlist-add-form");
const songInput = document.querySelector("#song-input");


addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const title = songInput.value.trim();
  if (!title) return;

  const vinylOptions = [
    "/images/purple-vinyl.svg",
    "/images/black-vinyl.svg",
    "/images/orange-vinyl.svg",
    "/images/red-vinyl.svg",
    "/images/yellow-vinyl.svg",
    "/images/blue-vinyl.svg",
  ];

  const randomVinyl =
    vinylOptions[Math.floor(Math.random() * vinylOptions.length)];

  songs.unshift({ title, vinyl: randomVinyl });

  songInput.value = "";
  renderPlaylist();
});
  