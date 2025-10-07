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
const container = document.getElementById("content-main");
const crossSearch = document.getElementById("crossSearch")

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
    code: 0,
    link: "",
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
    code: 0,
    link: "",
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
    code: "",
    link: "",
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
    code: 0,
    link: "",
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
    code: 0,
    link: "",
  },
  {
    name: "ARCADE",
    artist: "Duncan Laurence",
    cover:
      "https://source.boomplaymusic.com/group10/M00/11/23/8589002fac984c5dbb5a92230b476f3c_464_464.webp",
    file: "music list/arcade.mpeg",
    language: "ENGLISH",
    duration: "3:05",
    like: false,
    year: 2020,
    code: 0,
    link: "",
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
    code: "",
    link: "",
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
    code: "",
    link: "",
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
    code: "",
    link: "",
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
    code: "",
    link: "",
  },
  {
    name: "Talking To The Moon Official",
    artist: "Bruno Mars",
    cover: "https://c.saavncdn.com/517/Doo-Wops-Hooligans-English-2011-500x500.jpg",
    file: "music list/y2mate.com - Bruno Mars  Talking To The Moon Official Lyric Video.mp3",
    language: "ENGLISH",
    duration: "3:34",
    like: false,
    year: 2010,
    code: "",
    link: "",
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
    code: "",
    link: "",
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
    code: "",
    link: "",
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
    code: "",
    link: "",
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
    code: "",
    link: "",
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
    code: "",
    link: "",
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
    code: "",
    link: "",
  },
  {
    name: "Old Town Road",
    artist: "Lil Nas X",
    cover: "https://a10.gaanacdn.com/gn_img/albums/VdNW0JMKo5/dNW0Mx6Xbo/size_l.webp",
    file: "music list/old town road.mpeg",
    language: "ENGLISH",
    duration: "2:37",
    like: false,
    year: 2019,
    code: "",
    link: "",
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
    code: "",
    link: "",
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
    code: "",
    link: "",
  },
  {
    name: "WITHOUT ME",
    artist: "EMINEM",
    cover:
      "https://a10.gaanacdn.com/gn_img/albums/D0PKLrWGl9/0PKLqZkZ3G/size_l.webp",
    file: "music list/without me.mpeg",
    language: "ENGLISH",
    duration: "4:51",
    like: false,
    year: 2002,
    code: "",
    link: "",
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
    code: "",
    link: "",
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
    code: "",
    link: "",
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
    code: "",
    link: "",
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
    code: "",
    link: "",
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
    code: "",
    link: "",
  },
  {
    name: "IN THE CLUB",
    artist: "50 CENT",
    cover: "https://a10.gaanacdn.com/gn_img/albums/NOXWVRgWkq/OXWVxVp0Kk/size_l.webp",
    file: "music list/50 cent.mpeg",
    language: "ENGLISH",
    duration: "4:07",
    like: false,
    year: 2017,
    code: "",
    link: "",
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
    code: "",
    link: "",
  },
  {
    name: "night changes",
    artist: "One Direction",
    cover:
      "https://a10.gaanacdn.com/gn_img/albums/MmqK5EKwRO/mqK57M7EWw/size_l.webp",
    file: "music list/night changes.mpeg",
    language: "ENGLISH",
    duration: "4:00",
    like: false,
    year: 2014,
    code: "",
    link: "",
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
    code: "",
    link: "",
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
    code: "",
    link: "",
  },
  {
    name: "Attention",
    artist: "Charlie Puth",
    cover: "https://mr-jat.in/siteuploads/generaltheme/thumb/files/sft12/5957/5957-2.webp",
    file: "music list/Attention - 320Kbps-(Mr-Jat.in).mp3",
    language: "ENGLISH",
    duration: "2:57",
    like: false,
    year: 2017,
    code: "",
    link: "",
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
    code: "",
    link: "",
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
    code: "",
    link: "",
  },
  {
    name: "100 Million",
    artist: "Karan Aujla",
    cover:
      "https://cover.djpunjab.is/55105/300x700/street-dreams-karan-aujla.webp",
    file: "music list/100 Million.mpeg",
    language: "PUNJABI",
    duration: "3:06",
    like: false,
    year: 2022,
    code: "",
    link: "",
  },
  {
    name: "Still D.R.E.",
    artist: "Dr Dre AND Snoop Dogg",
    cover:
      "https://a10.gaanacdn.com/gn_img/albums/JD2KJyAbOL/D2KJoEYm3O/size_l.webp",
    file: "music list/still d.r.e.mpeg",
    language: "ENGLUSH",
    duration: "4:50",
    like: false,
    year: 2001,
    code: "",
    link: "",
  },
  {
    name: "Aa Mil",
    artist: "Lisa Mishra and Zaeden",
    cover:
      "https://c.saavncdn.com/368/Aa-Mil-Hindi-2023-20241205172002-500x500.jpg",
    file: "music list/Aa Mil.mpeg",
    language: "HINDI",
    duration: "2:27",
    like: false,
    year: 2023,
    code: "",
    link: "",
  },
  {
    name: "Bachke Bachke",
    artist: "Karan Aujla & Ikky",
    cover:
      "https://c.saavncdn.com/538/Making-Memories-English-2023-20230818075015-500x500.jpg",
    file: "music list/Bachke Bachke.mpeg",
    language: "PUNJABI",
    duration: "3:30",
    like: false,
    year: 2023,
    code: "",
    link: "",
  },
  {
    name: "Bulleya",
    artist: "Papon",
    cover:
      "https://c.saavncdn.com/778/Sultan-Hindi-2016-20190329150247-500x500.jpg",
    file: "music list/Bulleya.mpeg",
    language: "HINDI",
    duration: "4:33",
    like: false,
    year: 2016,
    code: "",
    link: "",
  },
  {
    name: "Courtside",
    artist: "Karan Aujla",
    cover:
      "https://c.saavncdn.com/907/Courtside-Punjabi-2025-20250506120316-500x500.jpg",
    file: "music list/courtside.mpeg",
    language: "PUNJABI",
    duration: "2:51",
    like: false,
    year: 2016,
    code: "",
    link: "",
  },
  {
    name: "Tere Bina",
    artist: "Masoom Sharma",
    cover:
      "https://hindi2.djpunjab.app/cover/OE3QOYoBLmqh0apPBeQO4g==/tere-bina-cover-image.webp",
    file: "music list/tere bina.mpeg",
    language: "HARYANVI",
    duration: "2:52",
    like: false,
    year: 2024,
    code: "",
    link: "",
  },
  {
    name: "Soni Soni",
    artist: "Darshan Raval And Jonita Gandhi",
    cover:
      "https://c.saavncdn.com/306/Soni-Soni-From-Ishq-Vishk-Rebound-Hindi-2024-20240619164934-500x500.jpg",
    file: "music list/Soni Soni.mpeg",
    language: "HINDI",
    duration: "3:13",
    like: false,
    year: 2024,
    code: "",
    link: "",
  },
  {
    name: "Players",
    artist: "Karan Aujla And Badshah",
    cover:
      "https://t2.genius.com/unsafe/430x430/https%3A%2F%2Fimages.genius.com%2Fdbd4396c57ba10911a426e985bbd3e81.1000x1000x1.jpg",
    file: "music list/Players.mpeg",
    language: "PUNJABI",
    duration: "2:51",
    like: false,
    year: 2022,
    code: "",
    link: "",
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
    code: "",
    link: "",
  },
  {
    name: "Until I Found You",
    artist: "Stephen Sanchez",
    cover: "https://a10.gaanacdn.com/gn_img/albums/ZaP37OR3Dy/P37OnpYV3D/size_l.jpg",
    file: "music list/i found you.mpeg",
    language: "ENGLISH",
    duration: "2:55",
    like: false,
    year: 2022,
    code: "",
    link: "",
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
    code: "",
    link: "",
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
    code: "",
    link: "",
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
    code: "",
    link: "",
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
    code: "",
    link: "",
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
    code: "",
    link: "",
  },
  {
    name: "GUSTAKH DIL TERE LIYE",
    artist: "Sonu Nigam, Sunidhi Chauhan",
    cover:
      "https://pagalnew.com/coverimages/Gustakh-Dil-Tere-Liye-Dil-Maange-More-500-500.jpg",
    file: "music list/gustakh dil tere liye.mpeg",
    language: "HINDI",
    duration: "4:22",
    like: false,
    year: 2004,
    code: "",
    link: "",
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
    code: "",
    link: "",
  },
  {
    name: "Dil Main Nahi Laona",
    artist: "Maninder Buttar",
    cover:
      "https://a10.gaanacdn.com/gn_img/song/w4MKPgOboj/MKPe4w1x3o/size_l_1559793817.webp",
    file: "music list/Dil Main Nahi Laona.mpeg",
    language: "PUNJABI",
    duration: "2:14",
    like: false,
    year: 2019,
    code: "",
    link: "",
  },
  {
    name: "Dil Diyan Gallan",
    artist: "Abhijeet Srivastava",
    cover:
      "https://c.saavncdn.com/423/Dil-Diyan-Gallan-Original-Motion-Picture-Soundtrack-Punjabi-2019-20240821160612-500x500.jpg",
    file: "music list/Dil Diyan Gallan parmish verma.mpeg",
    language: "PUNJABI",
    duration: "3:18",
    like: false,
    year: 2018,
    code: "",
    link: "",
  },
  {
    name: "El Jatt",
    artist: "Varinder Brar",
    cover:
      "https://cover.mr-jatt.im/thumb/496967/El-Jatt-1.jpg",
    file: "music list/El Jatt.mpeg",
    language: "PUNJABI",
    duration: "4:43",
    like: false,
    year: 2021,
    code: "",
    link: "",
  },
  {
    name: "ranjheya ve",
    artist: "Zain Zohaib",
    cover:
      "https://pendujatt.com.se/uploads/album/ranjheya-ve-zain-zohaib.webp",
    file: "music list/ranjheya ve.mpeg",
    language: "HINDI",
    duration: "4:26",
    like: false,
    year: 2022,
    code: "",
    link: "",
  },
  {
    name: "Odon Galan Hor Si",
    artist: "Hustinder",
    cover:
      "https://covers.djpunjab.pro/image/500193/Odon-Galan-Hor-Si-1.jpg",
    file: "music list/Odon Galan Hor Si.mpeg",
    language: "HINDI",
    duration: "3:41",
    like: false,
    year: 2021,
    code: "",
    link: "",
  },
  {
    name: "Meri Banogi Kya",
    artist: "Rito Riba",
    cover:
      "https://a10.gaanacdn.com/gn_img/albums/81l3Mye3rM/l3MZOgYPWr/size_m.jpg",
    file: "music list/Meri Banogi Kya.mpeg",
    language: "HINDI",
    duration: "3:32",
    like: false,
    year: 2023,
    code: "",
    link: "",
  },
  {
    name: "Flower",
    artist: "Gippy Grewal",
    cover:
      "https://a10.gaanacdn.com/gn_img/albums/w4MKPDOKoj/4MKPJOpjWo/size_m.jpg",
    file: "music list/Flower.mpeg",
    language: "PUNJABI",
    duration: "3:01",
    like: false,
    year: 2010,
    code: "",
    link: "",
  },
  {
    name: "Kaise Hua",
    artist: "Vishal Mishra",
    cover:
      "https://c.saavncdn.com/980/Kaise-Hua-From-Kabir-Singh--Hindi-2019-20190613075009-500x500.jpg",
    file: "music list/Kaise Hua.mpeg",
    language: "HINDI",
    duration: "4:14",
    like: false,
    year: 2019,
    code: "",
    link: "",
  },
  {
    name: "Kaho Na Kaho",
    artist: "Amir Jamal",
    cover:
      "https://c.saavncdn.com/476/Murder-Hindi-2024-20240412153731-500x500.jpg",
    file: "music list/Kaho Na Kaho.mpeg",
    language: "HINDI",
    duration: "4:25",
    like: false,
    year: 2002,
    code: "",
    link: "",
  },
  {
    name: "Gangstas Paradise",
    artist: "Coolio",
    cover:
      "https://c.saavncdn.com/365/Gangsta-s-Paradise-English-1995-20190607041555-500x500.jpg",
    file: "music list/Gangstas Paradise [320] Kbps-(SongsPk.com.se).mp3",
    language: "ENGLISH",
    duration: "4:00",
    like: false,
    year: 1995,
    code: "",
    link: "",
  },
  {
    name: "Mann Mera",
    artist: "Gajendra Verma",
    cover:
      "https://a10.gaanacdn.com/gn_img/albums/21GWwrR3pk/GWwrmYm43p/size_l_1759318561.jpg",
    file: "music list/Mann Mera.mpeg",
    language: "HINDI",
    duration: "3:09",
    like: false,
    year: 2013,
    code: "",
    link: "",
  },
  {
    name: "Hawa Banke",
    artist: "Rito Riba",
    cover:
      "https://a10.gaanacdn.com/gn_img/albums/qaLKY623pO/LKYAQJOpKp/size_l_1746834470.jpg",
    file: "music list/Hawa Banke Rito Riba 320 Kbps.mp3",
    language: "PUNJABI",
    duration: "4:00",
    like: false,
    year: 2025,
    code: "",
    link: "",
  },
  {
    name: "Jaikal Mahakal",
    artist: "Amit Trivedi",
    cover:
      "https://a10.gaanacdn.com/gn_img/albums/JD2KJyAbOL/2KJy9LzwbO/size_l_1745489199.jpg",
    file: "music list/Jaikal Mahakal.mpeg",
    language: "HINDI",
    duration: "4:16",
    like: false,
    year: 2022,
    code: "",
    link: "",
  },
];

let indexOFl = songs.filter((val,index)=>{
  return val.language === "ENGLISH"
})

console.log(indexOFl)

songs.forEach((val) => {
  val.link = `https://www.google.com/search?q=${val.artist}`;
});

let indexCode = 0;
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
    code: songs[indexCode].code,
  };

  if (like.classList.contains("like")) {
    favorate.push(addFav);
  } else {
    let existing = favorate.findIndex(
      (val) => val.name === addFav.name && val.artist === addFav.artist
    );

    console.log(existing);

    favorate.splice(existing, 1);
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
  document.getElementById(
    "lang"
  ).textContent = `LANGUAGE : ${songs[index].language}`;
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
  indexCode++;
  songs[index].code = indexCode;
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

// window.addEventListener("keydown", (e) => {
//   if (e.key === "ArrowRight") {
//     forward.click();
//   }
//   if (e.key === "ArrowLeft") {
//     backward.click();
//   }
// });

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

    optionContent.addEventListener("click", (e) => {
      songName.textContent = val.name.toUpperCase();
      artistName.textContent = val.artist.toUpperCase();
      img.src = val.cover;
      song.src = val.file;
      document.getElementById("sev").src = val.cover;
      infoSong.textContent = `SONG : ${val.name}`;
      artistInfo.textContent = val.artist;
      yearInfo.textContent = `YEAR : ${val.year}`;
      durationInfo.textContent = `DURATION : ${val.duration}`;
      document.getElementById("lang").textContent = `LANGUAGE : ${val.language}`;
      artistInfo.href = val.link;
      song.play();
      pause.style.display = `flex`;
      play.style.display = `none`;
      options.style.display = `none`;
      inputBox.value = ``;
      options.innerHTML = ``;
      crossSearch.style.display = `none`
      optionStatus(songs);
    });
  });
}



optionStatus(songs);

inputBox.addEventListener("focus", (e) => {
  options.style.display = `flex`;
});

let width = window.innerWidth

if(width < 480){
  inputBox.addEventListener("focus", (e) => {
    options.style.display = `flex`;
    crossSearch.style.display = `flex`
  });

  crossSearch.addEventListener("click",(e)=>{
    options.style.display = `none`;
    crossSearch.style.display = `none`
  })
}


console.log(crossSearch)

container.addEventListener("click", (e) => {
  options.style.display = `none`;
});

let lengthLessThenZero = false;
inputBox.addEventListener("input", (e) => {
  options.innerHTML = ``;
  let songlist = songs.filter((val) => {
    return (
      val.name
        .toLocaleLowerCase()
        .startsWith(inputBox.value.toLocaleLowerCase()) ||
      val.artist
        .toLocaleLowerCase()
        .startsWith(inputBox.value.toLocaleLowerCase()) ||
      val.language
        .toLocaleLowerCase()
        .startsWith(inputBox.value.toLocaleLowerCase())
    );
  });

  if (songlist.length === 0) {
    lengthLessThenZero = true;
    console.log(lengthLessThenZero);
    optionStatus(songlist);
  } else {
    lengthLessThenZero = false;
    console.log(lengthLessThenZero);
    optionStatus(songlist);
  }

  console.log(songlist);
  if (lengthLessThenZero === true) {
    options.textContent = "NOT-FOUND";
    options.style.alignItems = `center`;
  }
});



// log-in section//

// // const storedUser = localStorage.setItem("UserList" , JSON.stringify(UserList))

// const goToLog = document.getElementById("gotolog");
// const goToSign = document.getElementById("gotosign");
// const form = document.getElementById("form");
// const signForm = document.getElementById("sign-form");
// const btn = document.getElementById("enter");
// const inputFirstName = document.getElementById("firstname");
// const inputLastName = document.getElementById("lastname");
// const inputEmail = document.getElementById("email");
// const Inputnumber = document.getElementById("number");
// const inputPassword = document.getElementById("makepassword");
// const inputConfirm = document.getElementById("confirmpassword");
// const username = document.getElementById("username");
// const passlog = document.getElementById("password-log");

// // let user = []

// let user = JSON.parse(localStorage.getItem("user")) || [];

// // console.log(user)

// let SignInStatus = false;

// let userField = {
//   firstName: "",
//   lastName: "",
//   email: "",
//   password: "",
//   number: "",
//   isLogin: false,
// };

// btn.addEventListener("click", (e) => {
//   document.querySelector(".content").style.display = "none";
//   document.querySelector(".log-in").style.display = `flex`;
// });

// goToLog.addEventListener("click", (e) => {
//   e.preventDefault();
//   document.getElementById("form").style.display = `flex`;
//   document.querySelector("#sign-form").style.display = `none`;
// });
// goToSign.addEventListener("click", (e) => {
//   e.preventDefault();
//   document.querySelector("#sign-form").style.display = `flex`;
//   document.getElementById("form").style.display = `none`;
// });

// inputFirstName.addEventListener("blur", (e) => {
//   let numeberRejex = /[0-9]/;
//   if (inputFirstName.value.trim() === "") {
//     document.getElementById(
//       "firstmessage"
//     ).textContent = `FIRST NAME IS IMPORTANT TO FILL`;
//     document.getElementById("firstmessage").classList.add("red");
//     document.getElementById("firstmessage").classList.remove("green");
//     SignInStatus = false;
//   } else if (
//     inputFirstName.value.length < 3 ||
//     numeberRejex.test(inputFirstName.value)
//   ) {
//     document.getElementById("firstmessage").textContent = `NOT VALID`;
//     document.getElementById("firstmessage").classList.add("red");
//     document.getElementById("firstmessage").classList.remove("green");
//     SignInStatus = false;
//   } else {
//     document.getElementById("firstmessage").textContent = `VALID`;
//     document.getElementById("firstmessage").classList.add("green");
//     document.getElementById("firstmessage").classList.remove("red");
//     SignInStatus = true;
//   }
// });
// inputFirstName.addEventListener("focus", (e) => {
//   document.getElementById("firstmessage").textContent = ``;
// });

// inputEmail.addEventListener("blur", (e) => {
//   if (inputEmail.value.trim() === "") {
//     document.getElementById(
//       "emailmessage"
//     ).textContent = `EMAIL FIELD IS BLANK`;
//     SignInStatus = false;
//     document.getElementById("emailmessage").classList.add("red");
//     document.getElementById("emailmessage").classList.remove("green");
//   }

//   let ends = "@gmail.com";

//   if (inputEmail.value.endsWith(ends)) {
//     document.getElementById("emailmessage").textContent = `EMAIL IS VALID`;
//     document.getElementById("emailmessage").classList.add("green");
//     document.getElementById("emailmessage").classList.remove("red");
//     SignInStatus = true;
//   } else {
//     document.getElementById("emailmessage").textContent = `EMAIL IS NOT VALID`;
//     document.getElementById("emailmessage").classList.add("red");
//     document.getElementById("emailmessage").classList.remove("green");
//     SignInStatus = false;
//   }
// });
// inputEmail.addEventListener("focus", (e) => {
//   if (inputEmail.value.trim() === "") {
//     document.getElementById("emailmessage").textContent = ``;
//   }
// });

// Inputnumber.addEventListener("blur", (e) => {
//   if (Inputnumber.value.trim() === "") {
//     document.getElementById("numbermessage").textContent = `ADD YOUR NUMBER`;
//     document.getElementById("numbermessage").classList.add("red");
//     document.getElementById("numbermessage").classList.remove("green");
//     SignInStatus = false;
//   } else if (Inputnumber.value.length < 10) {
//     document.getElementById(
//       "numbermessage"
//     ).textContent = `NUMBER SHOULD BE 10 DIGIT`;
//     document.getElementById("numbermessage").classList.add("red");
//     document.getElementById("numbermessage").classList.remove("green");
//     SignInStatus = false;
//   } else {
//     document.getElementById("numbermessage").textContent = `VALID`;
//     document.getElementById("numbermessage").classList.add("green");
//     document.getElementById("numbermessage").classList.remove("red");
//     SignInStatus = true;
//   }
// });
// Inputnumber.addEventListener("focus", (e) => {
//   document.getElementById("numbermessage").textContent = ``;
// });

// inputPassword.addEventListener("change", (e) => {
//   if (inputPassword.value.trim() === "") {
//     document.getElementById("passmessage").textContent = `SET YOUR PASSWORD`;
//     SignInStatus = false;
//     document.getElementById("passmessage").classList.add("red");
//     document.getElementById("passmessage").classList.remove("green");
//   }
//   let regexPass = /[a-bA-b0-9@$!%*?&]/;

//   if (regexPass.test(inputPassword.value) && inputPassword.value.length >= 8) {
//     document.getElementById("passmessage").textContent = `STRONG PASSWORD`;
//     SignInStatus = true;
//     document.getElementById("passmessage").classList.add("green");
//     document.getElementById("passmessage").classList.remove("red");
//   } else {
//     document.getElementById("passmessage").textContent = `WEAK PASSWORD`;
//     SignInStatus = false;
//     document.getElementById("passmessage").classList.add("red");
//     document.getElementById("passmessage").classList.remove("green");
//   }
// });
// inputPassword.addEventListener("focus", (e) => {
//   if (inputPassword.value.trim() === "") {
//     document.getElementById("passmessage").textContent = ``;
//   }
// });

// inputConfirm.addEventListener("change", (e) => {
//   if (inputConfirm.value.trim() === "") {
//     document.getElementById("conformmessage").textContent = `ENTER YOUR 
//     CONFIRMATION`;
//     document.getElementById("conformmessage").classList.add("red");
//     document.getElementById("conformmessage").classList.remove("green");
//     SignInStatus = false;
//   } else if (inputConfirm.value.trim() === inputPassword.value.trim()) {
//     document.getElementById("conformmessage").textContent = `VALID`;
//     document.getElementById("conformmessage").classList.add("green");
//     document.getElementById("conformmessage").classList.remove("red");
//     SignInStatus = true;
//   } else {
//     document.getElementById("conformmessage").textContent = `INVALID`;
//     document.getElementById("conformmessage").classList.add("red");
//     document.getElementById("conformmessage").classList.remove("green");
//     SignInStatus = false;
//   }
// });

// inputConfirm.addEventListener("focus", (e) => {
//   document.getElementById("conformmessage").textContent = ``;
// });

// signForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   if (!SignInStatus) {
//     document.getElementById(
//       "signresult"
//     ).textContent = `CHECK SOME FIELD WAS WRONG`;
//     document.getElementById("signresult").classList.add("red");
//     document.getElementById("signresult").classList.remove("green");
//   } else {
//     userField.firstName = inputFirstName.value;
//     userField.lastName = inputLastName.value;
//     userField.email = inputEmail.value;
//     userField.password = inputPassword.value;
//     userField.number = Inputnumber.value;
//     user.push(userField);
//     document.getElementById(
//       "signresult"
//     ).textContent = `SUCCESSFULLY SUBMITTED`;
//     document.getElementById("signresult").classList.add("green");
//     document.getElementById("signresult").classList.remove("red");

//     localStorage.setItem("user", JSON.stringify(user));
//     setTimeout(function () {
//       document.getElementById("form").style.display = `flex`;
//       document.querySelector("#sign-form").style.display = `none`;
//     }, 3000);
//     console.log(user);
//   }
//   // user.push(userField)

//   // localStorage.setItem("user" , JSON.stringify(user))

//   // console.log(user)
// });

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   let UserValid = false
//   let passValid = false

//   let userEmail = user.find((val) => {
//     return val.email === username.value.trim();
//   });

//   if (!userEmail) {
//     document.getElementById("result").textContent = `WRONG USERNAME`;
//     document.getElementById("result").classList.add("red");
//     document.getElementById("result").classList.remove("green");
//     UserValid = false
//   } else {
//     document.getElementById("result").textContent = ``;
//     UserValid = true
//   }

//   let userPass = user.find((val) => {
//     return val.password === passlog.value.trim();
//   });

//   if (!userPass) {
//     document.getElementById("result").textContent = `WRONG PASSWORD`;
//     document.getElementById("result").classList.add("red");
//     document.getElementById("result").classList.remove("green");
//     passValid = false
//   } else {
//     document.getElementById("result").textContent = ``;
//     passValid = true
//   }

//   if(!UserValid || !passValid){
//     document.getElementById("result").textContent = `INVALID`;
//     document.getElementById("result").classList.add("red");
//     document.getElementById("result").classList.remove("green");
//     userField.isLogin = false
//   }
//   else{
//     document.getElementById("result").textContent = `DETAILS IS CORRECT`;
//     document.getElementById("result").classList.add("green");
//     document.getElementById("result").classList.remove("red");
//     setTimeout(function () {
//       document.getElementById("form").style.display = `none`;
//       document.querySelector("#sign-form").style.display = `none`;
//       document.querySelector(".landing").style.display = `none`;
//       document.querySelector("#container").style.display = `flex`;
//     }, 3000);
//     userField.isLogin = true
//     localStorage.setItem("user", JSON.stringify(user));
//   console.log(userEmail,userPass);
//   console.log(userField.isLogin)
//   }
// });

// if(userField.isLogin === true){
//     document.getElementById("form").style.display = `none`;
//     document.querySelector("#sign-form").style.display = `none`;
//     document.querySelector(".landing").style.display = `none`;
//     document.querySelector("#container").style.display = `flex`;
// }

