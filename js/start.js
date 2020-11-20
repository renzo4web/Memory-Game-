// When spacebar pressed game start

function startGame() {
  document.getElementById("endGame").classList.remove("visible");
  document.getElementById("mov").innerText = "00";
  displayCards();
  //startChronometer();
  movements = 0;
  document.querySelectorAll(".tarjeta").forEach(function (elem) {
    elem.addEventListener("click", reveal);
  });
}

startGame();

document.getElementById("endGame-button").addEventListener("click", startGame);
