function finishReload() {
  if (actualLevel < levels.length - 1) {
    document.getElementById("subeNivel").classList.add("visible");
  } else {
    document.getElementById("endGame").classList.add("visible");
  }
}
