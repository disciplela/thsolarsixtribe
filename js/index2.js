//changes vid and overlay randomly

var n = Math.floor((Math.random() * 11) + 1);
var m = Math.floor((Math.random() * 4) + 1);


function playRandomVid() {

  document.querySelector("video").src = "videos/VIDEO" + n + ".mp4";
  document.getElementById("screen-tint").className = "overlay-" + m;
}

function playMusic() {
  var sound = document.querySelector("video").muted;
  if (sound === true) {
    playSoundOn();
  } else playSoundOff();
}

// turn sound ON
function playSoundOn() {

  document.querySelector("video").muted = false;

}
// turn sound OFF
function playSoundOff() {

  document.querySelector("video").muted = true;

}

// Random YPlayer
var r = Math.floor(Math.random() * 15); //15
// Album Videos

V1 = "z0kXnXz8Qwc" //Intersolar| Works!
V2 = "qmf9zh1Mf2c" //Breathe |Works!
V3 = "eUrTVgqeJZw" //Solar Pt 1 |Works!
V4 = "G393KUUWZMw" //Ghost| Works!
V5 = "VkwKH2bBRB8" //Pretty Girls Like 2 Chainz| Works!
V6 = "F2oXn6LeutU" //Cracks of a Modern Man| Works!
V7 = "LGRxhK6bi4w" //Familiar| Works!
V8 = "zCTSgjzwYZo" //onw| Works!
V9 = "LE6wF5_yihU" //sick of it| Works!
V10 = "_ofdV8EE_T0" //Flames| Works!
V11 = "QFCvYbttp2I"; //Westside Raiden | Works! Keep
V12 = "97a0U6V8nbA"; //Solaris | Works! Keep
V13 = "3nA6rlgbBmc"; //Big Lit | Works! Keep
V14 = "Rv5uYfqWQzs"; //Roman Globe Theatre | Works! Keep
V15 = "Whiwo33MfqM"; //Wordit | Works! Keep
V16 = "8OhCOfg2Hag"; //Holla | Works! Keep


// Music Videos

// V1 = "QFCvYbttp2I"; //Westside Raiden | Works! Keep
// V2 = "97a0U6V8nbA"; //Solaris | Works! Keep
// V3 = "3nA6rlgbBmc"; //Big Lit | Works! Keep
// V4 = "8Wb4591aXVY"; //Serotonin | Works! Keep
// V5 = "Rv5uYfqWQzs"; //Saturday Night | Works! x2 Keep
// V6 = "xmC5MhHkUdM"; //Six | Works! Remove
// V7 = "excsyLN3mzk"; //Saturday Night | Works!
// V8 = "Rv5uYfqWQzs"; //Roman Globe Theatre | Works! Keep
// V9 = "sL0O3XKT83M"; //Dedicated | Works! Keep
// V10 = "Whiwo33MfqM"; //Wordit | Works! Keep
// V11 = "_4JMDL1uJvA"; //Chasing Secrets | Works! Remove
// V12 = "mE9QgUtZGRc"; //King's Dead Remix | Works! Remove
// V13 = "dEOnlmMaPZ8"; //SOLAR | Works! Remove
// V14 = "mXZSwQYlLjk"; // Untitled 02 Remix | Works! Remove
// V15 = "8OhCOfg2Hag"; //Holla | Works! Keep
// V16 = "L4CNfXekRiU"; //Humble Remix | Works! Remove
// V5 = "EGK0QZBo2VQ"; //Find My Way |Works! Keep
// V17="KAaNGsDHUZM"; //The Meaning | Doesn't Work! Test again.

var test = [V1, V2, V3, V4, V5, V6, V7, V8, V9, V10];

//This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    width: '1px',
    height: '1px',
    videoId: test[r],
    playerVars: {
      'autoplay': 1,
      'playsinline': 1
    },
    events: {
      'onReady': onPlayerReady
    }
  });
}

//The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.mute();
  event.target.playVideo();
}
