function counterReload() {
  movements;
  movements++;
  if (movements < 10) {
    movements = "0" + movements;
  }
  document.getElementById("mov").innerText = movements;
}
