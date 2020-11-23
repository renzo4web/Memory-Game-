writeLevels(actualLevel);

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

function writeLevels() {
  let menulLvl = document.querySelector(".selecciona-nivel ul");
  levels.forEach(function (element, index) {
    let ctrlLevel = document.createElement("li");
    ctrlLevel.innerHTML =
      "<button class='nivel' data-nivel=" +
      index +
      ">Level " +
      (index + 1) +
      "</button>";
    menulLvl.appendChild(ctrlLevel);
  });
}

function changeLevel() {
  let level = parseInt(this.dataset.nivel);
  actualLevel = level;
  reloadLevel();
  startGame();
}
