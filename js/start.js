// When spacebar pressed game start

function startGame() {
  document.getElementById("endGame").classList.remove("visible");
  document.getElementById("gameOver").classList.remove("visible");
  document.getElementById("subeNivel").classList.remove("visible");
  document.getElementById("mov").innerText = "00";
  maxCounter();
  displayCards(levels[actualLevel].cards);
  //
  movements = 0;
  document.querySelectorAll(".tarjeta").forEach(function (elem) {
    elem.addEventListener("click", reveal);
  });

  if (!relaxMode) {
    startChronometer();
  } else {
    document.getElementById("cronometro").classList.add("cronometro-oculto");
  }
}

function reloadGame() {
  actualLevel = 0;

  startGame();
}

document.querySelectorAll(".reiniciar").forEach(function (element) {
  element.addEventListener("click", reloadGame);
});

document.getElementById("subir").addEventListener("click", loadNewLevel);

//Pantalla de bienvenida
document.getElementById("bienvenida").classList.add("visible");
