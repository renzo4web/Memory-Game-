displayCards();

// When spacebar pressed game start
document.body.addEventListener("keyup", (event) => {
  if (event.code === "Space") {
    startChronometer();
    startGame();
  }
});

function startGame() {
  document.querySelectorAll(".tarjeta").forEach(function (elem) {
    elem.addEventListener("click", reveal);
  });
}
