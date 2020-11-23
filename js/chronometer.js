function startChronometer() {
  let seconds = 0;
  let minutes = levels[actualLevel].time;
  let secondsText;
  let minutesText;

  function reloadCount() {
    seconds--;
    if (seconds < 0) {
      seconds = 59;
      minutes--;
    }
    if (minutes < 0) {
      minutes = 0;
      seconds = 0;
      clearInterval(stopwatch);
      timeOver();
    }
    minutesText = minutes;
    secondsText = seconds;
    if (seconds < 10) {
      secondsText = "0" + seconds;
    }
    if (minutes < 10) {
      minutesText = "0" + minutes;
    }
    secondsText = document.getElementById("segundos").innerText = secondsText;
    minutesText = document.getElementById("minutos").innerText = minutesText;
  }
  stopwatch = setInterval(reloadCount, 1000);
}
