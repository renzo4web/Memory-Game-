function finishReload() {
  clearInterval(stopwatch);
  //because leveles lents is 3 (0,1,2) but actual actuallvl count(1,2,3)
  if (actualLevel < levels.length - 1) {
    document.getElementById("subeNivel").classList.add("visible");
  } else {
    document.getElementById("endGame").classList.add("visible");
  }
  // MOvements Finish
  //   if (movements < maxCounter:) {
  //     document.getElementById("gameOver").classList.add("visible");
  //   }
}
