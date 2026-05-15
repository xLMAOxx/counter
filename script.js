//turning all the html id's into variables
const counterDisplay = document.getElementById("counterDisplay");
const targetSeconds = document.getElementById("targetSeconds");
const targetMinutes = document.getElementById("targetMinutes");
const targetHours = document.getElementById("targetHours");
const submitBtn = document.getElementById("sumbitbtn");
const stopbtn = document.getElementById("stopbtn");

let activeTimeout = null;
let isPaused = false; 


function format(n) {
  return String(n).padStart(2, "0");
};

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();

  if(activeTimeout){
    clearTimeout(activeTimeout);
    activeTimeout = null;
  }

  //takes in the user input
  const h = Number(targetHours.value) || 0;
  const m = Number(targetMinutes.value) || 0;
  const s = Number(targetSeconds.value) || 0;
  const totalMs = h * 3600000 + m * 60000 + s * 1000;
  const targetTime = Date.now() + totalMs;


  //the Math behind the countdown
  function timer() {
    const distance = Math.max(0, targetTime - Date.now());
    const minutes = Math.floor(distance / 1000 / 60) % 60;
    const seconds = Math.floor(distance / 1000) % 60;
    const hours = Math.floor(distance / 1000 / 60 / 60);

    //stops the timer after 0
    if (distance <= 0) {
      console.log("done");
      return;
    };

    counterDisplay.innerHTML = `${format(hours)} : ${format(minutes)} : ${format(seconds)}`;

    activeTimeout = setTimeout(timer, 100);
  }
  timer();
});