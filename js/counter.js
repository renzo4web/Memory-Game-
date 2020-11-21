function counterReload() {
  movements;
  movements++;
  if (movements > levels[actualLevel].maxMovements && !relaxMode) {
    gameOver();
    return;
  }
  if (movements < 10) {
    movements = "0" + movements;
  }
  document.getElementById("mov").innerText = movements;
}

function maxCounter() {
  let maxCounterText = levels[actualLevel].maxMovements;
  if (maxCounterText < 10) {
    maxCounterText = "0" + maxCounterText;
  }
  document.getElementById("mov-total").innerText = maxCounterText;
}
