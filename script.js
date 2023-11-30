function updateTime() {
  // Obtenir l'heure actuelle
  var now = new Date();

  // Extraire les heures, minutes et secondes
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  // Formater l'heure avec deux chiffres pour les heures, les minutes et les secondes
  var formattedTime =
    padNumber(hours) + " : " + padNumber(minutes) + " : " + padNumber(seconds);

  // Mettre à jour le contenu de la div avec l'id "clock"
  document.getElementById("clock").innerText = formattedTime;
}

// Ajouter un zéro devant les chiffres si nécessaire
function padNumber(number) {
  return number < 10 ? "0" + number : number;
}

// Mettre à jour l'heure toutes les secondes
setInterval(updateTime, 1000);

// Appeler updateTime une fois au chargement de la page pour afficher l'heure initiale
updateTime();
