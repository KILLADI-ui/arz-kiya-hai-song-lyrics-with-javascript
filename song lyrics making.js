const audio = document.getElementById("audio");
const start = document.getElementById("start");

start.addEventListener("click", () => {
  audio.muted = false;
  audio.play();
  start.style.display = "none";
});

const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");
const line4 = document.getElementById("line4");
const line5 = document.getElementById("line5");
const line6 = document.getElementById("line6");
const line7 = document.getElementById("line7");
const line8 = document.getElementById("line8");
const line9 = document.getElementById("line9");

audio.addEventListener("timeupdate", () => {
  const time = audio.currentTime;

  //Reset all

  line1.classList.remove("show");
  line2.classList.remove("show");
  line3.classList.remove("show");
  line4.classList.remove("show");
  line5.classList.remove("show");
  line6.classList.remove("show");
  line7.classList.remove("show");
  line8.classList.remove("show");
  line9.classList.remove("show");

  if (time >= 0.1 && time < 3.5) {
    line1.classList.add("show");
  } else if (time >= 4 && time < 5.7) {
    line2.classList.add("show");
  } else if (time >= 6.2 && time < 7.2) {
    line3.classList.add("show");
  } else if (time >= 7.4 && time < 9.5) {
    line4.classList.add("show");
  } else if (time >= 9.9 && time < 13.2) {
    line5.classList.add("show");
  } else if (time >= 13.5 && time < 17.8) {
    line6.classList.add("show");
  } else if (time >= 18 && time < 20) {
    line7.classList.add("show");
  } else if (time >= 20.2 && time < 24.7) {
    line8.classList.add("show");
  } else if (time >= 24.8 && time < 27) {
    line9.classList.add("show");
  }
});
