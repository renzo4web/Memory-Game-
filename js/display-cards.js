function randomCards() {
  let resultRandom = totalEmojis.sort(function () {
    return 0.5 - Math.random();
  });
  return resultRandom;
}

// ------------------------*Display Cards*----------------
function displayCards() {
  let mesa = document.querySelector("#mesa");
  let randomSetOfCards = randomCards();
  mesa.innerHTML = "";

  randomSetOfCards.forEach(function (element) {
    //Creo el div para utilizar en el metodo appendchild
    let tarjet = document.createElement("div");
    //modifico el inner del div agregandole algo
    tarjet.innerHTML =
      "<div class='tarjeta' data-valor= " +
      element +
      ">" +
      "<div class='tarjeta__contenido'>" +
      element +
      "</div>" +
      "</div>";
    mesa.appendChild(tarjet);
  });
}
