var video;
let mute = document.querySelector("#mute");
let slider = document.querySelector("#slider");
let volumeDisplay = document.querySelector("#volume");

window.addEventListener("load", function () {
  console.log("Good job opening the window");
  video = document.querySelector("video");
  video.autoplay = false;
  console.log("Autoplay is set to false");
  video.loop = false;
  console.log("Loop is set to false");
});

document.querySelector("#play").addEventListener("click", function () {
  console.log("Play Video");
  video.play();
  volumeDisplay.innerHTML = video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function () {
  console.log("Pause Video");
  video.pause();
});

document.querySelector("#slower").addEventListener("click", function () {
  video.playbackRate = video.playbackRate * 0.9;
  console.log("Slow down video");
  console.log("Speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function () {
  video.playbackRate = video.playbackRate / 0.9;
  console.log("Speed up video");
  console.log("Speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function () {
  console.log("Skip ahead");
  let currentTime = video.currentTime;
  let totalDuration = video.duration;
  if (currentTime + 10 < totalDuration) {
    video.currentTime = currentTime + 10;
  } else {
    video.currentTime = 0;
  }
  console.log("Video current time is " + video.currentTime);
});

// Mute/unmute the video and update the text in the button.

document.querySelector("#mute").addEventListener("click", function () {
  if (video.muted) {
    video.muted = false;
    mute.textContent = "Mute";
    console.log("Unmute");
  } else {
    video.muted = true;
    mute.textContent = "Unmute";
    console.log("Mute");
  }
});

document.querySelector("#slider").addEventListener("input", function () {
  console.log("The current value is " + video.volume);
  video.volume = slider.value / 100;
  volumeDisplay.innerHTML = video.volume * 100 + "%";
  console.log("The current value is " + video.volume);
  console.log(volumeDisplay.outerHTML);
});

document.querySelector("#vintage").addEventListener("click", function () {
  console.log("Old School");
  video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function () {
  console.log("Original");
  video.classList.remove("oldSchool");
});
