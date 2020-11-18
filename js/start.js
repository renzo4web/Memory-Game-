displayCards();

document.querySelectorAll(".tarjeta").forEach(function (elem) {
  elem.addEventListener("click", reveal);
});
