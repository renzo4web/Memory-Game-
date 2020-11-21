function success(cards) {
  cards.forEach(function (element) {
    element.classList.add("acertada");
    document.getElementById("sonido-acierto").play();
  });
}

function error(cards) {
  cards.forEach(function (element) {
    element.classList.add("error");
    document.getElementById("sonido-error").play();
  });
  // set timeout to see animations
  setTimeout(function () {
    cards.forEach(function (element) {
      element.classList.remove("descubierta");
      element.classList.remove("error");
    });
  }, 1000);
}
