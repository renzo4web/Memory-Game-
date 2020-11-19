function success(cards) {
  cards.forEach(function (element) {
    element.classList.add("acertada");
  });
}

function error(cards) {
  cards.forEach(function (element) {
    element.classList.add("error");
  });
  // set timeout to see animations
  setTimeout(function () {
    cards.forEach(function (element) {
      element.classList.remove("descubierta");
      element.classList.remove("error");
    });
  }, 1000);
}
