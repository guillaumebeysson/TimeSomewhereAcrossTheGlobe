// Fonction pour générer une heure aléatoire entre 0 et 23
function getRandomHour() {
  return Math.floor(Math.random() * 24);
}

// Fonction pour mettre à jour l'heure
function updateTime() {
  // Obtenir l'heure actuelle pour les minutes et les secondes
  var now = new Date();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  // Si l'heure n'a pas encore été initialisée, générer une heure aléatoire
  if (!window.randomHour) {
    window.randomHour = getRandomHour();
  }

  // Formater l'heure avec deux chiffres pour les heures, les minutes et les secondes
  var formattedTime =
    padNumber(window.randomHour) +
    " : " +
    padNumber(minutes) +
    " : " +
    padNumber(seconds);

  // Mettre à jour le contenu de la div avec l'id "clock"
  document.getElementById("clock").innerText = formattedTime;
}

// Ajouter un zéro devant les chiffres si nécessaire
function padNumber(number) {
  return number < 10 ? "0" + number : number;
}

// Mettre à jour l'heure lors du chargement de la page
updateTime();

// Actualiser l'heure lorsque la page est actualisée
window.addEventListener("beforeunload", function () {
  delete window.getRandomHour; // Supprimer l'heure aléatoire lors de l'actualisation
});

// Mettre à jour les secondes chaque seconde
setInterval(updateTime, 1000);
