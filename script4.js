// Кнопка Play/Pause
const box = document.querySelector('.box');
box.addEventListener('click', (e)=>{
  e.target.classList.toggle('pause');
})

let trackContent = [
  {objTrackName: 'WARRIOR', album:'SHADXWBXRN', image: 'trackIcon0.jpg',
  objTrackDate: '5 months ago', objTrackGenre: '# phonk house', music: 'WARRIOR.mp3'},
  {objTrackName: 'IROHAZAKA', album:'KEIJIN', image: 'trackIcon1.jpg',
  objTrackDate: '1 year ago', objTrackGenre: '# drift phonk', music: 'IROHAZAKA.mp3'},
  {objTrackName: 'NEAR2DIE', album:'EL$E', image:'trackIcon2.jpg',
  objTrackDate: '1 year ago', objTrackGenre: '# remix phonk', music: 'NEAR2DIE.mp3'},
];

let nextButton = document.querySelector('.nextButton');
let previousButton = document.querySelector('.previousButton');
let trackName = document.querySelector('.trackName');
let albumTitle = document.querySelector('.albumTitle');
let images = document.querySelector('.images');
let trackDate = document.querySelector('.trackDate');
let trackGenre = document.querySelector('.trackGenre');
let playPause = document.querySelector('.playPause');
let audio = document.querySelector('audio');

let i=0;

audio.volume = 0.25;

nextButton.addEventListener("click", function () 
  {
    i=i+1;
    if (i>2)
    {i=0;}

    {
     smoothly(trackName, 'textContent', trackContent[i].objTrackName);
     smoothly(albumTitle, 'textContent', trackContent[i].album);
     smoothly(images, 'src', trackContent[i].image);
     smoothly(trackDate, 'textContent', trackContent[i].objTrackDate);
     smoothly(trackGenre, 'textContent', trackContent[i].objTrackGenre);
    
     if (trackContent[i].objTrackName.length>8)
     {
      trackName.style.fontSize = '26px';
     } 
     else 
     {
      trackName.style.fontSize = '30px';
     }

      audio.setAttribute('src', trackContent[i].music);
      audio.volume = 0.25;

      setTimeout(function() {
        audio.play();}, 1000);
     
    }
  }
);

previousButton.addEventListener("click", function()
  {
    if (i<=0)
    {i=2;}
    else 
    {i=i-1;}

    {
     smoothly(trackName, 'textContent', trackContent[i].objTrackName);
     smoothly(albumTitle, 'textContent', trackContent[i].album);
     smoothly(images, 'src', trackContent[i].image);
     smoothly(trackDate, 'textContent', trackContent[i].objTrackDate);
     smoothly(trackGenre, 'textContent', trackContent[i].objTrackGenre);

     if (trackContent[i].objTrackName.length>8)
     {
      trackName.style.fontSize = '26px';
     } 
     else 
     {
      trackName.style.fontSize = '30px';
     }

      audio.setAttribute('src', trackContent[i].music);
      audio.volume = 0.25;

      setTimeout(function() {
      audio.play();}, 1000);
    }
  }
);

playPause.addEventListener("click", function () 
  {
      if(audio.paused)
      {
        audio.play();
      } else 
      {
        audio.pause();
      }
  }
);