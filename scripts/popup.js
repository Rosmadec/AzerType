/*********************************************************************************
 *
 * Ce fichier contient toutes les fonctions nécessaires à l'affichage et à la
 * fermeture de la popup de partage.
 *
 *********************************************************************************/

/**
 * Cette fonction affiche la popup pour partager son score.
 */
function afficherPopup() {
  let popupBackground = document.querySelector(".popupBackground");
  // La popup est masquée par défaut (display:none), ajouter la classe "active"
  // va changer son display et la rendre visible.
  popupBackground.classList.add("active");
}

/**
 * Cette fonction cache la popup pour partager son score.
 */
function cacherPopup() {
  let popupBackground = document.querySelector(".popupBackground");
  // La popup est masquée par défaut (display:none), supprimer la classe "active"
  // va rétablir cet affichage par défaut.
  popupBackground.classList.remove("active");
}


/**
 * Cette fonction initialise les écouteurs d'événements qui concernent
 * l'affichage de la popup.
 */
function initAddEventListenerPopup() {
  // On écoute le click sur le bouton "partager"
  let btnPartage = document.querySelector(".zonePartage button");
  let popupBackground = document.querySelector(".popupBackground");

  let popupForm = document.querySelector(".popup form");
  popupForm.addEventListener("submit", (event)=>{
    event.preventDefault();
    console.log("Il n’y a pas eu de rechargement de page");
  })

  btnPartage.addEventListener("click", () => {
    // Quand on a cliqué sur le bouton partager, on affiche la popup
    afficherPopup();
  });

  // On écoute le click sur la div "popupBackground"
  popupBackground.addEventListener("click", (event) => {
    // Si on a cliqué précisément sur la popupBackground
    // (et pas un autre élément qui se trouve dedant)
    if (event.target === popupBackground) {
      // Alors on cache la popup
      cacherPopup();
    }
  });
}
