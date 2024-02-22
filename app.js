const music = new Audio('AlanWalker.mp3');

const songs = [
  {
    id:'1',
    songName:`On My Way <br>
    <div class="subtitle">Alan Walker</div>`,
    poster:"img/1.jpg"
  },
  {
    id:'2',
    songName:`Legends never Die <br>
    <div class="subtitle">Against The Current</div>`,
    poster:"img/2.jpg"
  },
  {
    id:'3',
    songName:`Fade <br>
    <div class="subtitle">Alan Walker</div>`,
    poster:"img/3.jpg"
  },
  {
    id:'4',
    songName:`Angala fitia<br>
    <div class="subtitle">Lion Hill</div>`,
    poster:"img/4.jpg"
  },
  {
    id:'5',
    songName:`CryJaxx - Candy shop <br>
    <div class="subtitle">feat Junior Charles</div>`,
    poster:"img/5.jpg"
  },
  {
    id:'6',
    songName:`Hafa mintsy <br>
    <div class="subtitle">REKO</div>`,
    poster:"img/3.jpg"
  },
  {
    id:'7',
    songName:`Mamomamo kely <br>
    <div class="subtitle">Tanjona</div>`,
    poster:"img/2.jpg"
  },
  {
    id:'8',
    songName:`Taram-pahazavana <br>
    <div class="subtitle">Teboka</div>`,
    poster:"img/1.jpg"
  },
  {
    id:'9',
    songName:`Rootsman <br>
    <div class="subtitle">Tsy ameko</div>`,
    poster:"img/3.jpg"
  },
  {
    id:'10',
    songName:`Go Down Deh<br>
    <div class="subtitle">Spice, Sean Paul, Shaggy</div>`,
    poster:"img/5.jpg"
  },
  {
    id:'11',
    songName:`Ao fa Kely sisa <br>
    <div class="subtitle">Rak Roots</div>`,
    poster:"img/4.jpg"
  },
  {
    id:'12',
    songName:`Love Yourself <br>
    <div class="subtitle">Justin Bieber</div>`,
    poster:"img/3.jpg"
  },
  {
    id:'13',
    songName:`Mamolava <br>
    <div class="subtitle">Nathan Gabri</div>`,
    poster:"img/1.jpg"
  },
  {
    id:'14',
    songName:`Eternity <br>
    <div class="subtitle">Eminem</div>`,
    poster:"img/4.jpg"
  },
  {
    id:'15',
    songName:`Tsy ho lasa ny rivotra <br>
    <div class="subtitle">Geoscar</div>`,
    poster:"img/5.jpg"
  },
]

Array.from(document.getElementsByClassName('songItem')).forEach((element, i)=>{
  element.getElementsByTagName('img')[0].src = songs[i].poster;
  element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementsByClassName('wave')[0];

masterPlay.addEventListener('click', ()=>{
  if(music.paused || music.currentTime <= 0){
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    wave.classList.add('active2');
  }else{
    music.pause();
    masterPlay.classList.add('bi-play-fill');
    masterPlay.classList.remove('bi-pause-fill');
    wave.classList.remove('active2');
  }
})

const makeAllPlays = () =>{
  Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
    element.classList.add('bi-play-circle-fill');
    element.classList.remove('bi-pause-circle-fill');
  })
}

let index = 0;

Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
  element.addEventListener('click', (e)=>{
    index = e.target.id;
    makeAllPlays();
    e.target.classList.remove('bi-play-circle-fill');
    e.target.classList.add('bi-pause-circle-fill');
    music.src = `audio/${index}.mp3`;
    music.play();
  })
})