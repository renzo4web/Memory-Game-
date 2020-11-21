document
  .getElementById("juego-normal")
  .addEventListener("click", startNormalMode);

document
  .getElementById("juego-relax")
  .addEventListener("click", startRelaxMode);

function startNormalMode() {
  relaxMode = false;
  document.getElementById("bienvenida").classList.remove("visible");
  startGame();
  document
    .getElementsByClassName("control-nivel")
    .classList.add("control-oculto");
}

function startRelaxMode() {
  relaxMode = true;
  document.getElementById("bienvenida").classList.remove("visible");
  startGame();
}

function gameOver() {
  clearInterval(stopwatch);
  document.getElementById("gameOver").classList.add("visible");
}

function timeOver() {
  document.getElementById("timeOver").classList.add("visible");
}
