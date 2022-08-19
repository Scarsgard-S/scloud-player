// const box = document.querySelector('.box');
// box.addEventListener('click', (e)=> {
// 	e.target.classList.toggle('pause');
// })

const box = document.querySelector('.box');
box.addEventListener('click', (e)=>{
  e.target.classList.toggle('pause');
})

// let trackContent = [
//   {text: 'IROHAZAKA', image: 'track-icon-2.jpg'},
//   {text: 'NEAR2DIE', image:'track-icon-3.jpg'}
// ];

let trackContent = [
  {objTrackName: 'WARRIOR', album:'SHADXWBXRN', image: 'trackIcon0.jpg',
  objTrackDate: '5 months ago', objTrackGenre: '# phonk house', music: 'WARRIOR.mp3'},
  {objTrackName: 'IROHAZAKA', album:'KEIJIN', image: 'trackIcon1.jpg',
  objTrackDate: '1 year ago', objTrackGenre: '# drift phonk', music: 'IROHAZAKA.mp3'},
  {objTrackName: 'NEAR2DIE', album:'EL$E', image:'trackIcon2.jpg',
  objTrackDate: '1 year ago', objTrackGenre: '# remix phonk', music: 'NEAR2DIE.mp3'},
];

let sounds = ['WARRIOR.mp3', 'IROHAZAKA.mp3', 'NEAR2DIE.mp3'];

let nextButton = document.querySelector('.nextButton');
let previousButton = document.querySelector('.previousButton');
let trackName = document.querySelector('.trackName');
let albumTitle = document.querySelector('.albumTitle');
let images = document.querySelector('.images');
let trackDate = document.querySelector('.trackDate');
let trackGenre = document.querySelector('.trackGenre');
let playPause = document.querySelector(".playPause");

let audio = document.querySelector('audio');

let i=0;
let g;

audio.volume = 0.25;

nextButton.addEventListener("click", function () 
  {

    i=i+1;
    if (i>2)
    {i=0;}

    {
     // smoothly(trackName, 'textContent', trackContent[i].text);
     // smoothly(images, 'src', trackContent[i].image);
     smoothly(trackName, 'textContent', trackContent[i].objTrackName);
     smoothly(albumTitle, 'textContent', trackContent[i].album);
     smoothly(images, 'src', trackContent[i].image);
     smoothly(trackDate, 'textContent', trackContent[i].objTrackDate);
     smoothly(trackGenre, 'textContent', trackContent[i].objTrackGenre);

     console.log(audio.src);
    
     if (trackContent[i].objTrackName.length>8)
     {
      trackName.style.fontSize = '26px';
     } 
     else 
     {
      trackName.style.fontSize = '30px';
     }

    audio.setAttribute('src', sounds[i]);
    audio.volume = 0.25;

    setTimeout(function(){
      audio.play();
    }, 1000);

     // {
     //  if(g === sounds.length) {
     //    g = 0;
     //  }
     //  audio.src = '${sounds[g]}';
     //  g++;
     //  audio.load();
     // };
     
    }

  //   playPause.addEventListener("click", function()
  // {
  //   if(audio.paused())
  //     {
  //       audio.play()
  //     } else 
  //     {
  //       audio.pause();
  //     }
     
  }
);

previousButton.addEventListener("click", function()
  {

    
    if (i<=0)
    {i=2;}
    else 
    {i=i-1;}

    {
     // smoothly(trackName, 'textContent', trackContent[i].text);
     // smoothly(images, 'src', trackContent[i].image);
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

    audio.setAttribute('src', sounds[i]);
    audio.volume = 0.25;

    setTimeout(function(){
      audio.play();
    }, 1000);

    }

  }
);

playPause.addEventListener("click", function () 
  {
      // console.log('Я есть Div');
      if(audio.paused)
      {
        audio.play();
      } else 
      {
        audio.pause();
      }
  }
);


