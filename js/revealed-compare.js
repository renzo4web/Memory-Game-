function reveal() {
  let totalReveal = document.querySelectorAll(".descubierta:not(.acertada)");
  // var of cards selected two compare

  //if more the two cards selected exit funtion
  if (totalReveal.length > 1) {
    return;
  }
  this.classList.add("descubierta");

  let cardRevealed = document.querySelectorAll(".descubierta:not(.acertada)");

  if (totalReveal < 2) {
    return;
  }

  compare(cardRevealed);
}
//------------------*Cards compare*---------
function compare(cardsToCompare) {
  if (cardsToCompare[0].dataset.valor === cardsToCompare[1].dataset.valor) {
    success(cardsToCompare);
  } else {
    error(cardsToCompare);
  }
}
