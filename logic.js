const pause = document.getElementById("pause");
const play = document.getElementById("play");
const song = document.getElementById("song");
const like = document.getElementById("like-heart");
const range = document.getElementById("range");
const durationDisplay = document.getElementById("duration");
const currentTime = document.getElementById("currentTime");
const forward = document.getElementById("forward");
const backward = document.getElementById("backward");
const songName = document.getElementById("song-name");
const artistName = document.getElementById("artist-name");
const img = document.getElementById("img");
const inputBox = document.getElementById("input");
const volumeRange = document.getElementById("vol");
const cross = document.getElementById("cross");
const infoBtn = document.getElementById("dtl");
const infoSong = document.getElementById("songIn");
const artistInfo = document.getElementById("artist");
const yearInfo = document.getElementById("year");
const durationInfo = document.getElementById("dur");
const options = document.getElementById("options");
const container = document.getElementById("content-main")
let songs = [
  {
    name: "Shape of You",
    artist: "Ed Sheeran",
    cover:
      "https://lq.djjohal.com/covers/56840/Shape%20of%20You%20(Remix)%20Extended%20Version%202017.jpg",
    file: "music list/shape of you.mpeg",
    language: "ENGLISH",
    duration: "3:53",
    like: false,
    year: 2017,
    code : 0,
    link : ""
  },
  {
    name: "52 Bars",
    artist: "Karan Aujla",
    cover: "https://lq.djjohal.com/covers/729278/52%20Bars.jpg",
    file: "music list/52 Bars (DJJOhAL.Com).mp3",
    language: "PUNJABI",
    duration: "2:59",
    like: false,
    year: 2022,
    code : 0,
    link : ""
  },
  {
    name: "ANTIDOTE",
    artist: "Karan Aujla",
    cover: "https://lq.djjohal.com/covers/732502/ANTIDOTE.jpg",
    file: "music list/ANTIDOTE (DJJOhAL.Com).mp3",
    language: "PUNJABI",
    duration: "3:08",
    like: false,
    year: 2023,
    code : "",
    link : ""
  },
  {
    name: "Daytona",
    artist: "Karan Aujla",
    cover: "https://lq.djjohal.com/covers/735051/Daytona.jpg",
    file: "music list/Daytona.mp3",
    language: "PUNJABI",
    duration: "3:14",
    like: false,
    year: 2023,
    code : 0,
    link : ""
  },
  {
    name: "Despacito",
    artist: "Luis Fonsi Ft Daddy Yankee",
    cover:
      "https://trendybeatz.com/images/Luis-Fonsi-Ft-Daddy-Yankee-Despacito-Art.jpg",
    file: "music list/Luis-Fonsi-Ft-Daddy-Yankee-Despacito-(TrendyBeatz.com).mp3",
    language: "SPANISH",
    duration: "4:42",
    like: false,
    year: 2017,
    code : 0,
    link : ""
  },
  {
    name: "Excuses",
    artist: "AP Dhillon",
    cover:
      "https://c.saavncdn.com/890/Excuses-English-2021-20210930112054-500x500.jpg",
    file: "music list/Excuses.mp3",
    language: "PUNJABI",
    duration: "2:56",
    like: false,
    year: 2020,
    code : "",
    link : ""
  },
  {
    name: "Fallin Apart",
    artist: "Karan Aujla",
    cover: "https://cover.mr-jatt.im/thumb/503847/Fallin-Apart-1.jpg",
    file: "music list/Fallin Apart (DJJOhAL.Com).mp3",
    language: "PUNJABI",
    duration: "3:19",
    like: false,
    year: 2022,
    code : "",
    link : ""
  },
  {
    name: "For A Reason",
    artist: "Karan Aujla",
    cover: "https://lq.djjohal.com/covers/735051/Daytona.jpg",
    file: "music list/For A Reason - Karan Aujla.mp3",
    language: "PUNJABI",
    duration: "3:05",
    like: false,
    year: 2023,
    code : "",
    link : ""
  },
  {
    name: "Game Over",
    artist: "Karan Aujla",
    cover: "https://cover.mr-jatt.im/thumb/501672/Game-Over-1.jpg",
    file: "music list/Game Over (DJJOhAL.Com).mp3",
    language: "PUNJABI",
    duration: "3:11",
    like: false,
    year: 2019,
    code : "",
    link : ""
  },
  {
    name: "Gangsta",
    artist: "Karan Aujla",
    cover: "https://lq.djjohal.com/covers/727295/Gangsta.jpg",
    file: "music list/Gangsta (DJJOhAL.Com).mp3",
    language: "PUNJABI",
    duration: "2:54",
    like: false,
    year: 2021,
    code : "",
    link : ""
  },
  {
    name: "High End",
    artist: "Diljit Dosanjh",
    cover: "https://lq.djjohal.com/covers/63577/High%20End.jpg",
    file: "music list/High End - Diljit Dosanjh.mp3",
    language: "PUNJABI",
    duration: "3:25",
    like: false,
    year: 2018,
    code : "",
    link : ""
  },
  {
    name: "IDK HOW",
    artist: "Karan Aujla",
    cover: "https://lq.djjohal.com/covers/732502/IDK%20HOW.jpg",
    file: "music list/IDK HOW (DJJOhAL.Com).mp3",
    language: "PUNJABI",
    duration: "3:09",
    like: false,
    year: 2023,
    code : "",
    link : ""
  },
  {
    name: "Ima Do My Thiiing",
    artist: "Karan Aujla",
    cover: "https://lq.djjohal.com/covers/735051/Daytona.jpg",
    file: "music list/Ima Do My Thiiing - Karan Aujla.mp3",
    language: "PUNJABI",
    duration: "3:21",
    like: false,
    year: 2023,
    code : "",
    link : ""
  },
  {
    name: "Insane",
    artist: "AP Dhillon",
    cover: "https://cover.mr-jatt.im/thumb/497111/Insane-1.jpg",
    file: "music list/Insane.mp3",
    language: "PUNJABI",
    duration: "3:04",
    like: false,
    year: 2021,
    code : "",
    link : ""
  },
  {
    name: "Intro",
    artist: "Karan Aujla",
    cover: "https://lq.djjohal.com/covers/727295/Intro.jpg",
    file: "music list/Intro (DJJOhAL.Com).mp3",
    language: "PUNJABI",
    duration: "2:12",
    like: false,
    year: 2022,
    code : "",
    link : ""
  },
  {
    name: "Kesariya",
    artist: "Arijit Singh",
    cover:
      "https://a10.gaanacdn.com/gn_img/song/z8k3yd1Krx/k3y4gl50Kr/size_l_1658037089.webp",
    file: "music list/Kesariya Brahmastra 320 Kbps.mp3",
    language: "HINDI",
    duration: "4:28",
    like: false,
    year: 2022,
    code : "",
    link : ""
  },
  {
    name: "Kya Loge Tum",
    artist: "B Praak & Jaani",
    cover:
      "https://a10.gaanacdn.com/gn_img/albums/10q3Zj1352/q3ZRBOA235/size_l_1684418170.webp",
    file: "music list/Kya Loge Tum Jaani 320 Kbps.mp3",
    language: "HINDI",
    duration: "3:47",
    like: false,
    year: 2023,
    code : "",
    link : ""
  },
  {
    name: "Levitating",
    artist: "Dua Lipa",
    cover:
      "https://a10.gaanacdn.com/gn_img/albums/w4MKPObojg/4MKPGkYObo/size_l.webp",
    file: "music list/Dua-Lipa-Ft-DaBaby-Levitating-Remix-(TrendyBeatz.com).mp3",
    language: "ENGLISH",
    duration: "3:24",
    like: false,
    year: 2020,
    code : "",
    link : ""
  },
  {
    name: "On My Way",
    artist: "Alan Walker",
    cover:
      "https://a10.gaanacdn.com/gn_img/albums/NOXWVRgWkq/OXWV47RRKk/size_l.webp",
    file: "music list/On My Way Alan Walker 320 Kbps.mp3",
    language: "ENGLISH",
    duration: "3:13",
    like: false,
    year: 2019,
    code : "",
    link : ""
  },
  {
    name: "Ooouuu",
    artist: "Karan Aujla",
    cover: "https://lq.djjohal.com/covers/727295/Gangsta.jpg",
    file: "music list/Oouuu (DJJOhAL.Com).mp3",
    language: "PUNJABI",
    duration: "2:59",
    like: false,
    year: 2022,
    code : "",
    link : ""
  },
  {
    name: "Take It Easy",
    artist: "Karan Aujla",
    cover: "https://lq.djjohal.com/covers/729278/Take%20It%20Easy.jpg",
    file: "music list/Take It Easy (DJJOhAL.Com).mp3",
    language: "PUNJABI",
    duration: "3:12",
    like: false,
    year: 2023,
    code : "",
    link : ""
  },
  {
    name: "They Know",
    artist: "Karan Aujla",
    cover: "https://lq.djjohal.com/covers/727295/They%20Know.jpg",
    file: "music list/They Know (DJJOhAL.Com).mp3",
    language: "PUNJABI",
    duration: "3:02",
    like: false,
    year: 2021,
    code : "",
    link : ""
  },
  {
    name: "Tujh Mein Rab Dikhta Hai",
    artist: "Roop Kumar Rathod",
    cover:
      "https://a10.gaanacdn.com/gn_img/albums/7rVW1aRWk5/rVW1pY53k5/size_l.webp",
    file: "music list/Tujh Mein Rab Dikhta Hai Rab Ne Bana Di Jodi 320 Kbps.mp3",
    language: "HINDI",
    duration: "4:41",
    like: false,
    year: 2008,
    code : "",
    link : ""
  },
  {
    name: "Unreachable",
    artist: "Karan Aujla",
    cover: "https://lq.djjohal.com/covers/727295/Unreachable.jpg",
    file: "music list/Unreachable (DJJOhAL.Com).mp3",
    language: "PUNJABI",
    duration: "3:18",
    like: false,
    year: 2021,
    code : "",
    link : ""
  },
  {
    name: "Who They",
    artist: "Karan Aujla",
    cover: "https://lq.djjohal.com/covers/732502/Y.D.G.jpg",
    file: "music list/WHO THEY (DJJOhAL.Com).mp3",
    language: "PUNJABI",
    duration: "2:57",
    like: false,
    year: 2023,
    code : "",
    link : ""
  },
  {
    name: "Y.D.G",
    artist: "Karan Aujla",
    cover: "https://lq.djjohal.com/covers/732502/Y.D.G.jpg",
    file: "music list/Y.D.G (DJJOhAL.Com).mp3",
    language: "PUNJABI",
    duration: "3:10",
    like: false,
    year: 2023,
    code : "",
    link : ""
  },
  {
    name: "Yeah Naah",
    artist: "Karan Aujla",
    cover: "https://lq.djjohal.com/covers/729278/Yeah%20Naah.jpg",
    file: "music list/Yeah Naah (DJJOhAL.Com).mp3",
    language: "PUNJABI",
    duration: "3:15",
    like: false,
    year: 2022,
    code : "",
    link : ""
  },
  {
    name: "100 Million",
    artist: "Karan Aujla",
    cover: "https://cover.djpunjab.is/55105/300x700/street-dreams-karan-aujla.webp",
    file: "music list/100 Million.mpeg",
    language: "PUNJABI",
    duration: "3:06",
    like: false,
    year: 2022,
    code : "",
    link : ""
  },
  {
    name: "Aa Mil",
    artist: "Lisa Mishra and Zaeden",
    cover: "https://c.saavncdn.com/368/Aa-Mil-Hindi-2023-20241205172002-500x500.jpg",
    file: "music list/Aa Mil.mpeg",
    language: "HINDI",
    duration: "2:27",
    like: false,
    year: 2023,
    code : "",
    link : ""
  },
  {
    name: "Bachke Bachke",
    artist: "Karan Aujla & Ikky",
    cover: "https://c.saavncdn.com/538/Making-Memories-English-2023-20230818075015-500x500.jpg",
    file: "music list/Bachke Bachke.mpeg",
    language: "PUNJABI",
    duration: "3:30",
    like: false,
    year: 2023,
    code : "",
    link : ""
  },
  {
    name: "Bulleya",
    artist: "Papon",
    cover: "https://c.saavncdn.com/778/Sultan-Hindi-2016-20190329150247-500x500.jpg",
    file: "music list/Bulleya.mpeg",
    language: "HINDI",
    duration: "4:33",
    like: false,
    year: 2016,
    code : "",
    link : ""
  },
  {
    name: "Courtside",
    artist: "Karan Aujla",
    cover: "https://c.saavncdn.com/907/Courtside-Punjabi-2025-20250506120316-500x500.jpg",
    file: "music list/courtside.mpeg",
    language: "PUNJABI",
    duration: "2:51",
    like: false,
    year: 2016,
    code : "",
    link : ""
  },
  {
    name: "Tere Bina",
    artist: "Masoom Sharma",
    cover: "https://hindi2.djpunjab.app/cover/OE3QOYoBLmqh0apPBeQO4g==/tere-bina-cover-image.webp",
    file: "music list/tere bina.mpeg",
    language: "HARYANVI",
    duration: "2:52",
    like: false,
    year: 2024,
    code : "",
    link : ""
  },
  {
    name: "Soni Soni",
    artist: "Darshan Raval And Jonita Gandhi",
    cover: "https://c.saavncdn.com/306/Soni-Soni-From-Ishq-Vishk-Rebound-Hindi-2024-20240619164934-500x500.jpg",
    file: "music list/Soni Soni.mpeg",
    language: "HINDI",
    duration: "3:13",
    like: false,
    year: 2024,
    code : "",
    link : ""
  },
  {
    name: "Players",
    artist: "Karan Aujla And Badshah",
    cover: "https://t2.genius.com/unsafe/430x430/https%3A%2F%2Fimages.genius.com%2Fdbd4396c57ba10911a426e985bbd3e81.1000x1000x1.jpg",
    file: "music list/Players.mpeg",
    language: "PUNJABI",
    duration: "2:51",
    like: false,
    year: 2022,
    code : "",
    link : ""
  },
  {
    name: "Pistol",
    artist: "Sumit Parta",
    cover: "https://pagalnew.com/coverimages/Pistol-Sumit-Parta-500-500.jpg",
    file: "music list/pistol.mpeg",
    language: "HARYANVI",
    duration: "2:19",
    like: false,
    year: 2024,
    code : "",
    link : ""
  },
  {
    name: "Payal",
    artist: "Paradox and Yo Yo Honey Singh",
    cover: "https://pagalnew.com/coverimages/Payal-Glory-500-500.jpg",
    file: "music list/Payal.mpeg",
    language: "HINDI",
    duration: "3:46",
    like: false,
    year: 2024,
    code : "",
    link : ""
  },
  {
    name: "On Top",
    artist: "Karan Aujla",
    cover: "https://cover.mr-jatt.im/thumb/503230/On-Top-1669295239.jpg",
    file: "music list/On Top.mpeg",
    language: "PUNJABI",
    duration: "3:06",
    like: false,
    year: 2022,
    code : "",
    link : ""
  },
  {
    name: "Khoon Vich Garmi",
    artist: " Gary hothi AND honey singh",
    cover: "https://images.elyrics.net/artist_img/7a861f776ea34a09-1.jpg",
    file: "music list/Khoon Vich Garmi.mpeg",
    language: "PUNJABI",
    duration: "2:47",
    like: false,
    year: 2010,
    code : "",
    link : ""
  },
  {
    name: "Kharku Love",
    artist: "Bikka Sandhu",
    cover: "https://cover.mr-jatt.im/thumb/487804/Kharku-Love-1.jpg",
    file: "music list/Kharku Love.mpeg",
    language: "PUNJABI",
    duration: "3:41",
    like: false,
    year: 2020,
    code : "",
    link : ""
  },
  {
    name: "Tell Me",
    artist: "Karan Aujla",
    cover: "https://cover.mr-jatt.im/thumb/512353/Tell-Me-1.jpg",
    file: "music list/Karan Aujla.mpeg",
    language: "PUNJABI",
    duration: "4:38",
    like: false,
    year: 2025,
    code : "",
    link : ""
  },
  {
    name: "GUSTAKH DIL TERE LIYE",
    artist: "Sonu Nigam, Sunidhi Chauhan",
    cover: "https://pagalnew.com/coverimages/Gustakh-Dil-Tere-Liye-Dil-Maange-More-500-500.jpg",
    file: "music list/gustakh dil tere liye.mpeg",
    language: "HINDI",
    duration: "4:22",
    like: false,
    year: 2004,
    code : "",
    link : ""
  },
  {
    name: "Dholna",
    artist: "B Praak , Sukh E Muzical Doctorz",
    cover: "https://cover.djpunjab.is/43549/300x700/qismat-ammy-virk.webp",
    file: "music list/Dholna.mpeg",
    language: "PUNJABI",
    duration: "2:53",
    like: false,
    year: 2018,
    code : "",
    link : ""
  },
  {
    name: "Dil Main Nahi Laona",
    artist: "Maninder Buttar",
    cover: "https://a10.gaanacdn.com/gn_img/song/w4MKPgOboj/MKPe4w1x3o/size_l_1559793817.webp",
    file: "music list/Dil Main Nahi Laona.mpeg",
    language: "PUNJABI",
    duration: "2:14",
    like: false,
    year: 2019,
    code : "",
    link : "",
  },
];



songs.forEach((val)=>{
  val.link = `https://www.google.com/search?q=${val.artist}`
})

let indexCode = 0
const favorate = [];

function favadd() {
  let addFav = {
    name: songs[index].name,
    artist: songs[index].artist,
    cover: songs[index].cover,
    file: songs[index].file,
    language: songs[index].language,
    like: songs[index].like,
    duration: songs[index].duration,
    code : songs[indexCode].code 
  };

  if (like.classList.contains("like")) {
    favorate.push(addFav);
  } else {

    let existing = favorate.findIndex((val)=> val.name === addFav.name && val.artist === addFav.artist)

    console.log(existing)
    
    favorate.splice(existing , 1)
    
  }

  console.log(favorate);
}

let index = 0;

songName.textContent = songs[index].name.toUpperCase();
artistName.textContent = songs[index].artist.toUpperCase();
img.src = songs[index].cover;
song.src = songs[index].file;

function info(arr) {
  document.getElementById("sev").src = songs[index].cover;
  infoSong.textContent = `SONG : ${arr[index].name}`;
  artistInfo.textContent = arr[index].artist;
  yearInfo.textContent = `YEAR : ${arr[index].year}`;
  durationInfo.textContent = `DURATION : ${arr[index].duration}`;
  document.getElementById("lang").textContent = `LANGUAGE : ${songs[index].language}`;
  artistInfo.href = songs[index].link;
}

info(songs);

forward.addEventListener("click", (e) => {
  index++;
  if (index === songs.length) {
    index = 0;
  }
  songName.textContent = songs[index].name.toUpperCase();
  artistName.textContent = songs[index].artist.toUpperCase();
  img.src = songs[index].cover;
  song.src = songs[index].file;
  song.play();
  play.style.display = "none";
  pause.style.display = "flex";
  infoBtn.style.display = `flex`;
  document.getElementById("detail-content").style.display = `none`;
  if (songs[index].like === true) {
    like.classList.add("like");
  } else {
    like.classList.remove("like");
  }
  info(songs);
});

backward.addEventListener("click", (e) => {
  index--;
  if (index < 0) {
    index = songs.length - 1;
  }
  songName.textContent = songs[index].name.toUpperCase();
  artistName.textContent = songs[index].artist.toUpperCase();
  img.src = songs[index].cover;
  song.src = songs[index].file;
  song.play();
  play.style.display = "none";
  pause.style.display = "flex";
  infoBtn.style.display = `flex`;
  document.getElementById("detail-content").style.display = `none`;
  if (songs[index].like === true) {
    like.classList.add("like");
  } else {
    like.classList.remove("like");
  }
  info(songs);
});

play.addEventListener("click", (e) => {
  play.style.display = "none";
  pause.style.display = "flex";
  song.play();
});
pause.addEventListener("click", (e) => {
  pause.style.display = "none";
  play.style.display = "flex";
  song.pause();
});

song.addEventListener("timeupdate", (e) => {
  range.max = song.duration;
  range.value = song.currentTime;
});

range.addEventListener("input", () => {
  song.currentTime = range.value;
});


like.addEventListener("click", (e) => {
  like.classList.toggle("like");
  indexCode++
  songs[index].code = indexCode
  songs[index].like = true;
  if (!like.classList.contains("like")) {
    songs[index].like = false;
  }
  favadd();
});

function TimeEditer(dur) {
  let min = Math.floor(dur / 60);
  let sec = Math.floor(dur % 60);

  if (sec < 10) {
    sec = "0" + sec;
  }
  return `${min}:${sec}`;
}
song.addEventListener("timeupdate", () => {
  currentTime.textContent = TimeEditer(song.currentTime);
});

song.addEventListener("loadedmetadata", () => {
  durationDisplay.textContent = TimeEditer(song.duration);
});

// inputBox.addEventListener("input", (e) => {
//   let output = songs.filter((val) => {
//     return val.language
//       .toLocaleLowerCase()
//       .trim()
//       .startsWith(inputBox.value.toLocaleLowerCase().trim());
//   });

//   console.log(output);
// });

volumeRange.addEventListener("input", (e) => {
  song.volume = volumeRange.value;
});

infoBtn.addEventListener("click", (e) => {
  document.getElementById("detail-content").style.display = `flex`;
  infoBtn.style.display = `none`;
});

cross.addEventListener("click", (e) => {
  document.getElementById("detail-content").style.display = `none`;
  infoBtn.style.display = `flex`;
});

window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    forward.click();
  }
  if (e.key === "ArrowLeft") {
    backward.click();
  }
});

setInterval(function () {
  if (song.currentTime === song.duration) {
    forward.click();
  }
}, 3000);

function optionStatus(list) {
  list.forEach((val) => {
    const optionContent = document.createElement("div");
    const songInfo = document.createElement("div");
    optionContent.classList.add("option-content");
    songInfo.classList.add("songInfo");

    optionContent.innerHTML = `<img src="${val.cover}" alt="" height="50px" width="50px">`;
    songInfo.innerHTML = `<strong id="songOption">${val.name}</strong> 
    <span id="artistName">${val.artist} • ${val.language} • ${val.year}</span>`;
    options.appendChild(optionContent);
    optionContent.appendChild(songInfo);
    
    optionContent.addEventListener("click",(e)=>{
      songName.textContent = val.name.toUpperCase();
      artistName.textContent = val.artist.toUpperCase();
      img.src = val.cover;
      song.src = val.file;
      document.getElementById("sev").src = val.cover;
      infoSong.textContent = val.name;
      artistInfo.textContent = val.artist;
      yearInfo.textContent = val.year;
      durationInfo.textContent = val.duration;
      document.getElementById("lang").textContent = val.language;
      artistInfo.href = val.link;
      song.play()
      pause.style.display = `flex`
      play.style.display = `none`
      options.style.display = `none`
      inputBox.value = ``
      options.innerHTML = ``
      optionStatus(songs)
    })
    
  });
}

optionStatus(songs)


inputBox.addEventListener("focus",(e)=>{
  options.style.display = `flex`
})

container.addEventListener("click",(e)=>{
  options.style.display = `none`
})

let lengthLessThenZero = false
inputBox.addEventListener("input", (e) => {
  options.innerHTML = ``
  let songlist = songs.filter((val)=>{
    return val.name.toLocaleLowerCase().startsWith(inputBox.value.toLocaleLowerCase())||
    val.artist.toLocaleLowerCase().startsWith(inputBox.value.toLocaleLowerCase())||
     val.language.toLocaleLowerCase().startsWith(inputBox.value.toLocaleLowerCase())
     
    })

    if(songlist.length === 0){
      lengthLessThenZero = true
      console.log(lengthLessThenZero)
      optionStatus(songlist)
    }
    else{
      lengthLessThenZero = false
      console.log(lengthLessThenZero)
      optionStatus(songlist)
    }

    console.log(songlist)
    if(lengthLessThenZero === true){
      options.textContent = "NOT-FOUND"
      options.style.alignItems = `center`
    }
    
  });
  
  





