// When spacebar pressed game start

function startGame() {
  document.getElementById("endGame").classList.remove("visible");
  document.getElementById("gameOver").classList.remove("visible");
  document.getElementById("subeNivel").classList.remove("visible");
  document.getElementById("mov").innerText = "00";
  displayCards(levels[actualLevel].cards);
  //startChronometer();
  movements = 0;
  document.querySelectorAll(".tarjeta").forEach(function (elem) {
    elem.addEventListener("click", reveal);
  });
}

function reloadGame() {
  let actualLevel = 0;
  startGame();
}

startGame();

document.querySelectorAll(".reiniciar").forEach(function (element) {
  element.addEventListener("click", reloadGame);
});

document.getElementById("subir").addEventListener("click", loadNewLevel);
