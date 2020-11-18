function success(cards) {
  cards.forEach(function (element) {
    element.classList.add("acertada");
  });
}
function error(cards) {
  cards.forEach(function (element) {
    element.classList.remove("descubierta");
  });
}
