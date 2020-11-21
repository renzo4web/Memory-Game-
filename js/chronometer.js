function startChronometer() {
  let seconds = 0;
  let minutes = 1;
  let secondsText = document.getElementById("segundos");
  let minutesText = document.getElementById("minutos");

  function reloadCount() {
    console.log(seconds);
    seconds--;
    if (seconds < 0) {
      seconds = 59;
      minutes--;
    }
    if (minutes < 0) {
      minutes = 00;
      seconds = 00;
      clearInterval(stopwatch);
      timeOver();
    }
    if (seconds < 10) {
      secondsText.innerHTML = "0" + seconds;
    }
    if (minutes < 10) {
      minutesText.innerHTML = "0" + minutes;
    }
    minutesText.innerHTML = minutes;
    secondsText.innerHTML = seconds;
  }
  stopwatch = setInterval(reloadCount, 1000);
}
