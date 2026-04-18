
//Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/vavajodu.mp3');
let masterPlay = document.getElementById('masterplay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName("songItem"));     


let songs = [
    {songName:"vavajodu", filePath:"songs/vavajodu.mp3", coverPath:"/duggo3.jpeg"},
    {songName:"sunroof", filePath:"songs/Sunroof(PagalNew.Com.Se.mp3", coverPath:"/duggo4.jpeg.jpeg"},
    {songName:"phonk", filePath:"songs/phonk.mp3", coverPath:"/duggo5.jpeg"},
    {songName:"strongman", filePath:"songs/strongman.mp3", coverPath:"/duggo6.jpeg"},
    {songName:"Drift phonk", filePath:"songs/Drift phonk.mp3", coverPath:"/duggo7.jpeg"},
    
]
// songItems.forEach((element, i)=>{
//     console.log(element, i)
//     element.getElementsByTagName("img")[0].src = songs[i].coverPath;
//     element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
// })
// audioElement.play();

// Handle Play/Pause Click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.textContent = "pause_circle"; // Change to Pause Icon
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.textContent = "play_arrow"; // Change to Play Icon
        gif.style.opacity = 0;
    }
});

//Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    //update seekbar
   progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
   myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = (myProgressBar.value * audioElement.duration/100);
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName("songlistplay")).forEach((element)=>{
        element.classList.remove('pause_circle');
        element.classList.add('play_circle');
    })
}
Array.from(document.getElementsByClassName("songlistplay")).forEach((element)=>{
 element.addEventListener("click", (e)=>{
    makeAllPlays();
    e.target.classList.remove('play_circle');
    e.target.classList.add('pause_circle');
 })
})