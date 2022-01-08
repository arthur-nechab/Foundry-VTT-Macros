// Ajoute la condition "Abri partiel" sur les tokens sélectionnés
async function start() {
  if (token === undefined) { ui.notifications.warn("Pas de token sélectionné"); } else {
    for (let token of canvas.tokens.controlled) {
      game.cub.addCondition("Abri partiel", token, {warn : false});
    }
  }
}
start();