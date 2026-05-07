//turning all the html id's into variables
const counterDisplay = document.getElementById("counterDisplay");
const DecreaseBtn = document.getElementById("DecreaseBtn");
const ResetBtn = document.getElementById("ResetBtn");
const IncreaseBtn = document.getElementById("IncreaseBtn");
const targetSeconds = document.getElementById("targetSeconds");
const targetMinutes = document.getElementById("targetMinutes");
const targetHours = document.getElementById("targetHours");
const submitBtn = document.getElementById("sumbitbtn");


function format(n) {
  return String(n).padStart(2, "0");
}


submitBtn.addEventListener("click", function (e) {
  e.preventDefault();

  //takes in the user input
  const h = Number(targetHours.value) || 0;
  const m = Number(targetMinutes.value) || 0;
  const s = Number(targetSeconds.value) || 0;
  const totalMs = h * 3600000 + m * 60000 + s * 1000;

  let targetTime = Date.now() + totalMs;

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
    }
    //the visible part of the countdown in  HTML
    const delay = 1000 - (Date.now() % 1000);
    setTimeout(timer, delay);
    counterDisplay.innerHTML = `${format(hours)} : ${format(minutes)} : ${format(seconds)}`;
  }
  timer();
});


//-------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------
//Safe current progress into git and add changes in a new branch
//next thing to do is to insurre the countdown resets after the User chooses another number
//------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------

//the buttons for increasing/decreasing/reseting the time;
DecreaseBtn.addEventListener("onClick", function(){
    x-= 1;
});

ResetBtn.addEventListener("onClick", function(){
    x=0;
});

IncreaseBtn.addEventListener("onClick", function(){
    x+=1;
});