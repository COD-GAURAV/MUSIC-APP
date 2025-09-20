const pause = document.getElementById("pause")
const play = document.getElementById("play")
const song = document.getElementById("song")
const like = document.getElementById("like-heart")
const range = document.getElementById("range")
const durationDisplay = document.getElementById("duration")
const currentTime = document.getElementById("currentTime")
const forward = document.getElementById("forward")
const backward = document.getElementById("backward")
const songName = document.getElementById("song-name")
const artistName = document.getElementById("artist-name")
const img = document.getElementById("img")
const inputBox = document.getElementById("input")
const volumeRange = document.getElementById("vol")


let songs = [
  {
    name: "Shape of You",
    artist: "Ed Sheeran",
    cover: "https://lq.djjohal.com/covers/56840/Shape%20of%20You%20(Remix)%20Extended%20Version%202017.jpg",
    file: "music list/shape of you.mpeg",
    language: "ENGLISH",
    duration: "0:00",
    like: false,
  },
  {
    name: "52 Bars",
    artist: "Karan Aujla",
    cover: "https://lq.djjohal.com/covers/729278/52%20Bars.jpg",
    file: "music list/52 Bars (DJJOhAL.Com).mp3",
    language: "PUNJABI",
    duration: "0:00",
    like: false,
  },
  {
    name: "ANTIDOTE",
    artist: "Karan Aujla",
    cover: "https://lq.djjohal.com/covers/732502/ANTIDOTE.jpg",
    file: "music list/ANTIDOTE (DJJOhAL.Com).mp3",
    language: "PUNJABI",
    duration: "0:00",
    like: false,
  },
  {
    name: "Daytona",
    artist: "Karan Aujla",
    cover: "https://lq.djjohal.com/covers/735051/Daytona.jpg",
    file: "music list/Daytona.mp3",
    language: "PUNJABI",
    duration: "0:00",
    like: false,
  },
  {
    name: "Despacito",
    artist: "Luis Fonsi Ft Daddy Yankee",
    cover: "https://trendybeatz.com/images/Luis-Fonsi-Ft-Daddy-Yankee-Despacito-Art.jpg",
    file: "music list/Luis-Fonsi-Ft-Daddy-Yankee-Despacito-(TrendyBeatz.com).mp3",
    language: "SPANISH",
    duration: "0:00",
    like: false,
  },
  {
    name: "Excuses",
    artist: "AP Dhillon",
    cover: "https://c.saavncdn.com/890/Excuses-English-2021-20210930112054-500x500.jpg",
    file: "music list/Excuses.mp3",
    language: "PUNJABI",
    duration: "0:00",
    like: false,
  },
  {
    name: "Fallin Apart",
    artist: "Karan Aujla",
    cover: "https://cover.mr-jatt.im/thumb/503847/Fallin-Apart-1.jpg",
    file: "music list/Fallin Apart (DJJOhAL.Com).mp3",
    language: "PUNJABI",
    duration: "0:00",
    like: false,
  },
  {
    name: "For A Reason",
    artist: "Karan Aujla",
    cover: "https://lq.djjohal.com/covers/735051/Daytona.jpg",
    file: "music list/For A Reason - Karan Aujla.mp3",
    language: "PUNJABI",
    duration: "0:00",
    like: false,
  },
  {
    name: "Game Over",
    artist: "Karan Aujla",
    cover: "https://cover.mr-jatt.im/thumb/501672/Game-Over-1.jpg",
    file: "music list/Game Over (DJJOhAL.Com).mp3",
    language: "PUNJABI",
    duration: "0:00",
    like: false,
  },
  {
    name: "Gangsta",
    artist: "Karan Aujla",
    cover: "https://lq.djjohal.com/covers/727295/Gangsta.jpg",
    file: "music list/Gangsta (DJJOhAL.Com).mp3",
    language: "PUNJABI",
    duration: "0:00",
    like: false,
  },
  {
    name: "High End",
    artist: "Diljit Dosanjh",
    cover: "https://lq.djjohal.com/covers/63577/High%20End.jpg",
    file: "music list/High End - Diljit Dosanjh.mp3",
    language: "PUNJABI",
    duration: "0:00",
    like: false,
  },
  {
    name: "IDK HOW",
    artist: "Karan Aujla",
    cover: "https://lq.djjohal.com/covers/732502/IDK%20HOW.jpg",
    file: "music list/IDK HOW (DJJOhAL.Com).mp3",
    language: "PUNJABI",
    duration: "0:00",
    like: false,
  },
  {
    name: "Ima Do My Thiiing",
    artist: "Karan Aujla",
    cover: "https://lq.djjohal.com/covers/735051/Daytona.jpg",
    file: "music list/Ima Do My Thiiing - Karan Aujla.mp3",
    language: "PUNJABI",
    duration: "0:00",
    like: false,
  },
  {
    name: "Insane",
    artist: "AP Dhillon",
    cover: "https://cover.mr-jatt.im/thumb/497111/Insane-1.jpg",
    file: "music list/Insane.mp3",
    language: "PUNJABI",
    duration: "0:00",
    like: false,
  },
  {
    name: "Intro",
    artist: "Karan Aujla",
    cover: "https://lq.djjohal.com/covers/727295/Intro.jpg",
    file: "music list/Intro (DJJOhAL.Com).mp3",
    language: "PUNJABI",
    duration: "0:00",
    like: false,
  },
  {
    name: "Kesariya",
    artist: "Arijit Singh",
    cover: "https://a10.gaanacdn.com/gn_img/song/z8k3yd1Krx/k3y4gl50Kr/size_l_1658037089.webp",
    file: "music list/Kesariya Brahmastra 320 Kbps.mp3",
    language: "HINDI",
    duration: "0:00",
    like: false,
  },
  {
    name: "Kya Loge Tum",
    artist: "B Praak & Jaani",
    cover: "https://a10.gaanacdn.com/gn_img/albums/10q3Zj1352/q3ZRBOA235/size_l_1684418170.webp",
    file: "music list/Kya Loge Tum Jaani 320 Kbps.mp3",
    language: "HINDI",
    duration: "0:00",
    like: false,
  },
  {
    name: "Levitating",
    artist: "Dua Lipa",
    cover: "https://a10.gaanacdn.com/gn_img/albums/w4MKPObojg/4MKPGkYObo/size_l.webp",
    file: "music list/Dua-Lipa-Ft-DaBaby-Levitating-Remix-(TrendyBeatz.com).mp3",
    language: "ENGLISH",
    duration: "0:00",
    like: false,
  },
  {
    name: "On My Way",
    artist: "Alan Walker",
    cover: "https://a10.gaanacdn.com/gn_img/albums/NOXWVRgWkq/OXWV47RRKk/size_l.webp",
    file: "music list/On My Way Alan Walker 320 Kbps.mp3",
    language: "ENGLISH",
    duration: "0:00",
    like: false,
  },
  {
    name: "Ooouuu",
    artist: "Karan Aujla",
    cover: "https://lq.djjohal.com/covers/727295/Gangsta.jpg",
    file: "music list/Oouuu (DJJOhAL.Com).mp3",
    language: "PUNJABI",
    duration: "0:00",
    like: false,
  },
  {
    name: "Take It Easy",
    artist: "Karan Aujla",
    cover: "https://lq.djjohal.com/covers/729278/Take%20It%20Easy.jpgmusic list/Take It Easy.jpg",
    file: "music list/Take It Easy (DJJOhAL.Com).mp3",
    language: "PUNJABI",
    duration: "0:00",
    like: false,
  },
  {
    name: "They Know",
    artist: "Karan Aujla",
    cover: "https://lq.djjohal.com/covers/727295/They%20Know.jpg",
    file: "music list/They Know (DJJOhAL.Com).mp3",
    language: "PUNJABI",
    duration: "0:00",
    like: false,
  },
  {
    name: "Tujh Mein Rab Dikhta Hai",
    artist: "Roop Kumar Rathod",
    cover: "https://a10.gaanacdn.com/gn_img/albums/7rVW1aRWk5/rVW1pY53k5/size_l.webp",
    file: "music list/Tujh Mein Rab Dikhta Hai Rab Ne Bana Di Jodi 320 Kbps.mp3",
    language: "HINDI",
    duration: "0:00",
    like: false,
  },
  {
    name: "Unreachable",
    artist: "Karan Aujla",
    cover: "https://lq.djjohal.com/covers/727295/Unreachable.jpg",
    file: "music list/Unreachable (DJJOhAL.Com).mp3",
    language: "PUNJABI",
    duration: "0:00",
    like: false,
  },
  {
    name: "Who They",
    artist: "Karan Aujla",
    cover: "https://lq.djjohal.com/covers/732502/Y.D.G.jpg",
    file: "music list/WHO THEY (DJJOhAL.Com).mp3",
    language: "PUNJABI",
    duration: "0:00",
    like: false,
  },
  {
    name: "Y.D.G",
    artist: "Karan Aujla",
    cover: "https://lq.djjohal.com/covers/732502/Y.D.G.jpg",
    file: "music list/Y.D.G (DJJOhAL.Com).mp3",
    language: "PUNJABI",
    duration: "0:00",
    like: false,
  },
  {
    name: "Yeah Naah",
    artist: "Karan Aujla",
    cover: "https://lq.djjohal.com/covers/729278/Yeah%20Naah.jpg",
    file: "music list/Yeah Naah (DJJOhAL.Com).mp3",
    language: "PUNJABI",
    duration: "0:00",
    like: false,
  }
];


const favorate =[]

function favadd(){
  let addFav = {
    name: songs[index].name,
    artist: songs[index].artist,
    cover: songs[index].cover,
    file: songs[index].file,
    language: songs[index].language,
    like : songs[index].like,
    duration: songs[index].duration
}

 if(like.classList.contains("like")){
  favorate.push(addFav)
 }
 else{
  favorate.pop(addFav)
 }
console.log(favorate)
}







let index = 0

songName.textContent = songs[index].name.toUpperCase()
artistName.textContent = songs[index].artist.toUpperCase()
img.src = songs[index].cover
song.src = songs[index].file

forward.addEventListener("click",(e)=>{
    index++;
    if(index === songs.length){
        index = 0
    }
    songName.textContent = songs[index].name.toUpperCase()
    artistName.textContent = songs[index].artist.toUpperCase()
    img.src = songs[index].cover
    song.src = songs[index].file
    song.play()
     play.style.display = "none"
    pause.style.display = "flex"
    if(songs[index].like === true){
      like.classList.add("like")
    }
    else{
      like.classList.remove("like")
    }
})

backward.addEventListener("click",(e)=>{
    index--;
    if(index < 0){
        index = songs.length - 1
    }
    songName.textContent = songs[index].name.toUpperCase()
    artistName.textContent = songs[index].artist.toUpperCase()
    img.src = songs[index].cover
    song.src = songs[index].file
    song.play()
    play.style.display = "none"
    pause.style.display = "flex"
    if(songs[index].like === true){
      like.classList.add("like")
    }
    else{
      like.classList.remove("like")
    }
})


play.addEventListener("click",(e)=>{
    play.style.display = "none"
    pause.style.display = "flex"
    song.play()
    

})
pause.addEventListener("click",(e)=>{
    pause.style.display = "none"
    play.style.display = "flex"
    song.pause()
})

song.addEventListener("timeupdate",(e)=>{
    range.max = song.duration
    range.value = song.currentTime
})



range.addEventListener("input",()=>{
    song.currentTime = range.value
})

like.addEventListener("click",(e)=>{
    like.classList.toggle("like")
    songs[index].like = true
    if(!like.classList.contains("like")){
      songs[index].like = false
    }
    favadd()
})

function TimeEditer(dur){
    let min = Math.floor(dur/60)
    let sec = Math.floor(dur%60)

    if(sec < 10){
        sec = "0" + sec
    }
    return `${min}:${sec}`
}
song.addEventListener("timeupdate",()=>{
    currentTime.textContent = TimeEditer(song.currentTime)
})

song.addEventListener("loadedmetadata",()=>{
    durationDisplay.textContent = TimeEditer(song.duration)
}) 


inputBox.addEventListener("input",(e)=>{
  let output = songs.filter((val)=>{
  return val.language.toLocaleLowerCase().trim().startsWith(inputBox.value.toLocaleLowerCase().trim())
  })

console.log(output)
})

volumeRange.addEventListener("input",(e)=>{
  song.volume = volumeRange.value
})



