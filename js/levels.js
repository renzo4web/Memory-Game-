function upLevel() {
  actualLevel++;
}

function reloadLevel() {
  let lvlText = actualLevel + 1;
  if (lvlText < 10) {
    lvlText = "0" + lvlText;
  }
  document.getElementById("nivel").innerText = lvlText;
}

function loadNewLevel() {
  upLevel();
  reloadLevel();
  startGame();
}
