const baseImgDildo = [
  { id: 1, sourceImg: "https://vincentint.github.io/sergioGame.github.oi/img/free-icon-dildo-4380201.png" },
  { id: 2, sourceImg: "https://vincentint.github.io/sergioGame.github.oi/img/free-icon-dildo-4380217.png" },
  { id: 3, sourceImg: "https://vincentint.github.io/sergioGame.github.oi/img/free-icon-dildo-4380212.png" },
  { id: 4, sourceImg: "https://vincentint.github.io/sergioGame.github.oi/img/free-icon-dildo-4850907.png" },
];
const baseScreamAudio = [
  { id: 1, sourceAudio: "https://vincentint.github.io/sergioGame.github.oi/audio/aaaaaaaa-online-audio-converter_r9waVUO.mp3" },
  { id: 2, sourceAudio: "https://vincentint.github.io/sergioGame.github.oi/audio/final_5f9a045a61906f00f5e2f4ba_740815.mp3" },
  { id: 3, sourceAudio: "https://vincentint.github.io/sergioGame.github.oi/audio/bird-scream-power-up-meme.mp3" },
  { id: 4, sourceAudio: "https://vincentint.github.io/sergioGame.github.oi/audio/fnaf-vhs-screams-meme.mp3" },
  { id: 5, sourceAudio: "https://vincentint.github.io/sergioGame.github.oi/audio/z1lt8-un781.mp3" },
];
const baseAudio = [
  {
    id: 1,
    sourceAudio:
      "https://vincentint.github.io/sergioGame.github.oi/audio/Y2mate.mx - Kizaru Big Baby Tape- Расскажи как нашёл ведро кончи (переделка трека зеркало ) (320 kbps).mp3",
  },
  {
    id: 2,
    sourceAudio:
      "https://vincentint.github.io/sergioGame.github.oi/audio/Y2mate.mx - Brazilian phonk _ Gay remix (320 kbps).mp3",
  },
  {
    id: 3,
    sourceAudio:
      "https://vincentint.github.io/sergioGame.github.oi/audio/Y2mate.mx - Зима в сердце - Вовчик (gay remix) (320 kbps).mp3",
  },
  {
    id: 4,
    sourceAudio:
      "https://vincentint.github.io/sergioGame.github.oi/audio/Y2mate.mx - MACAN-ASPHALT 8 & Gay Remix (320 kbps).mp3",
  },
  {
    id: 5,
    sourceAudio:
      "https://vincentint.github.io/sergioGame.github.oi/audio/Y2mate.mx - BUSHIDO ZHO - когда я был натуралом (slowed+reverb) (320 kbps).mp3",
  },
];
const musicGame = document.getElementById("music_play");
musicGame.volume = 0.5;
musicGame.onended = () => backGroundMusic();

let sergio;
let dildo;
let modal;
let maxPoint = 0;
let addCounter;
let counter;

const stateSpeed = {
  jumpSec: 3.5,
  runSec: 0.5,
  dildoSec: 5,
};
let statusActive = false;
let statusFail = false;

function createGameFunc() {
  const sectionGame = document.getElementById("section_sergio_game");
  musicGame.volume = 0.5;
  sectionGame.innerHTML = "";
  statusFail = false;
  counter = 0;

  document.getElementById("section_introduction").style = "display: none";
  sectionGame.insertAdjacentHTML(
    "afterbegin",
    `
<section class="section_counter">
 <div class="container_counter_text">
 <div class="counter_text">
 <h4 class="title_counter">RECORD</h4>
 <h4 id="max_counter" class="title_counter">${maxPoint}</h4>
 <h4 class="title_counter">POINT</h4>
 </div>
  <div class="counter_text">
  <h4 class="title_counter">COUNTER</h4>
   <h4 id="add_counter" class="text_presume">0</h4>
   <h4 id="counter" class="title_counter">0</h4>
   <h4 class="title_counter">POINT</h4>
   </div>
 </div>
</section>

 <section id="section_sergio" class="section_sergio">
 <div class="backround_liner_game"></div>
   <div class="container_sergio">
     <div id="sergio" class="sergio sergio_run">
       <img
        id="segio_img"
         class="img_sergio"
         src="/img/photo_2024-02-15_09-32-55.png"
         alt="dino_sergio"
       />
     </div>
     <div id="dildo" class="dildo"></div>
   </div>
   <div class="line"></div>
 </section>`
  );
  sergio = document.getElementById("sergio");
  dildo = document.getElementById("dildo");
  modal = document.getElementById("container_modal");
  addCounter = document.getElementById("add_counter");
  counter = document.getElementById("counter");
  modal.innerHTML = "";
  sectionGame.onclick = () => spaceFucnSergion();

  counter.innerHTML = 0;

  requestAnimationFrame(changeCordSergion);
  addDildoFunc();
}
setTimeout(() => {
  createGameFunc();
}, 6200);

document.onkeydown = (e) => {
  if (e.code === "Space") {
    spaceFucnSergion();
  }
};
function addDildoFunc() {
  if (statusFail) {
    return false;
  }
  const randomDildo = Math.floor(Math.random() * (4 - 0) + 0);

  dildo.insertAdjacentHTML(
    "afterbegin",
    `<img
      class="img_dildo"
      src="${baseImgDildo[randomDildo].sourceImg}"
      alt="dildo"
    />`
  );

  dildo.style.animation = `linear dildo ${stateSpeed.dildoSec}s infinite`;

  let interval = setInterval(() => {
    if (statusFail) return clearInterval(interval);
    const prevCounter = +counter.innerHTML;

    addCounter.innerHTML = `+${Math.floor(Math.random() * (100 - 10) + 10)}`;
    counter.innerHTML = `${+prevCounter + +addCounter.innerHTML}`;
    if (maxPoint < +counter.innerHTML) {
      maxPoint = +counter.innerHTML;
      document.getElementById("max_counter").innerHTML = maxPoint;
    }

    addCounter.style.animation = "addCounter 0.5s ease-in";

    dildo.innerHTML = "";

    stateSpeed.dildoSec =
      stateSpeed.dildoSec <= 2.0
        ? stateSpeed.dildoSec
        : stateSpeed.dildoSec - 0.2;
    stateSpeed.runSec =
      stateSpeed.runSec <= 0.1 ? stateSpeed.runSec : stateSpeed.runSec - 0.005;
    stateSpeed.jumpSec =
      stateSpeed.jumpSec <= 1.2 ? stateSpeed.jumpSec : stateSpeed.jumpSec - 0.1;
    dildo.style.animation = "none";
    setTimeout(() => (addCounter.style.animation = ""), 500);
    setTimeout(() => {
      dildo.style.animation = `linear dildo ${stateSpeed.dildoSec}s infinite`;
      addDildoFunc();

      clearInterval(interval);
    }, 100);
  }, stateSpeed.dildoSec * 1000);
}
function spaceFucnSergion() {
  if (!statusActive && !statusFail) {
    console.log(statusActive, statusFail);
    statusActive = true;
    sergio.style = `animation: sergioJump ${stateSpeed.jumpSec}s ease infinite;`;

    setTimeout(() => {
      if (statusFail) return (statusActive = false);

      sergio.style = `animation: sergioRun ${stateSpeed.runSec}s infinite;`;
      statusActive = false;
    }, stateSpeed.jumpSec * 1000);
  }
}
function changeCordSergion() {
  let cordDildo = dildo.getBoundingClientRect();
  let cordSergio = sergio.getBoundingClientRect();

  if (cordDildo.x < cordSergio.x + 70 && cordSergio.y > cordDildo.y - 78) {
    statusFail = true;

    const randomAudio = Math.floor(Math.random() * (5 - 0) + 0);
    musicGame.volume = 0;
    sergio.style = "animation-play-state: paused";
    dildo.style = `animation:${dildo.style.animation}; animation-play-state: paused`;

    modal.insertAdjacentHTML(
      "afterbegin",
      `
        <div class="modal_window">
          <div>
            <h2 class="h2_title">SERGIO WAS FUCKED</h2>
            <div class="container_btn">
              <button id="restart_btn" class="btn">
                RESTART
              </button>
            </div>
          </div>
        
      </div>
      <audio id="scream_audio" playbackRate="0.5" autoplay src="${baseScreamAudio[randomAudio].sourceAudio}"></audio>`
    );
    document.getElementById("restart_btn").onclick = () => createGameFunc();
    document.getElementById("scream_audio").playbackRate = 0.8;
    segio_img.src = "/img/photo_2024-02-15_09-32-551.png";
    return;
  }

  requestAnimationFrame(changeCordSergion);
}
function backGroundMusic() {
  const randomMusic =
    baseAudio[Math.floor(Math.random() * (5 - 0) + 0)].sourceAudio;
  musicGame.src = randomMusic;
}
