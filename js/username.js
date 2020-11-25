function userData(e) {
  e.preventDefault();
  let welcomeMensaje = document.getElementById("welcome-user");
  let namePlayer = document.getElementById("username").value;
  let customMsj = `👋 Welcome ${namePlayer}, Good Luck.👋`;
  welcomeMensaje.textContent = customMsj;

  document.getElementById("bienvenida2").classList.remove("visible");

  document.getElementById("bienvenida").classList.add("visible");
  document.querySelectorAll("div .modal").textContent = namePlayer;

  function changeNamesTo(playerName) {
    let customMsj = ` 👋 Welcome ${playerName} , Good Luck.👋 `;
    document.querySelector(
      "#gameOver .modal h2"
    ).textContent = `¡Oh no! ${playerName}`;
    document.querySelector(
      "#timeOver .modal h2"
    ).textContent = `¡Oh no! ${playerName}`;
    document.querySelector(
      "#endGame .modal h2"
    ).textContent = `¡Wow ${playerName} what a memory!`;
    document.querySelector(
      "#subeNivel .modal h2"
    ).textContent = `¡Well done ${playerName}!`;
  }

  changeNamesTo(namePlayer);
}
