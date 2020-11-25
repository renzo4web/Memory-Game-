function startGame() {
  document.getElementById("endGame").classList.remove("visible");
  document.getElementById("gameOver").classList.remove("visible");
  document.getElementById("subeNivel").classList.remove("visible");
  document.getElementById("timeOver").classList.remove("visible");
  document.getElementById("mov").innerText = "00";
  maxCounter();

  displayCards(levels[actualLevel].cards);
  setTimeout(function () {
    document.querySelectorAll(".tarjeta").forEach(function (elem) {
      elem.classList.remove("descubierta");
    });
  }, 500);
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
// reload game click
document.querySelectorAll(".reiniciar").forEach(function (element) {
  element.addEventListener("click", reloadGame);
});
// new level click
document.getElementById("subir").addEventListener("click", loadNewLevel);

//Username display
document.getElementById("bienvenida2").classList.add("visible");

//Welcome personalize
formUser.addEventListener("submit", userData);

document
  .getElementById("control-nivel")
  .addEventListener("click", function (e) {
    document.querySelector(".selecciona-nivel").classList.add("visible");
  });

document
  .getElementById("cierra-niveles")
  .addEventListener("click", function () {
    document.querySelector(".selecciona-nivel").classList.remove("visible");
  });

document.querySelectorAll(".nivel").forEach(function (elemento) {
  elemento.addEventListener("click", changeLevel);
});
