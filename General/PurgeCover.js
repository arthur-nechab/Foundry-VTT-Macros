// Supprime l'effet "Abris" sur les tokens sélectionnés
async function start() {
  if (token === undefined) { ui.notifications.warn("Pas de token sélectionné"); } else {
    for (let token of canvas.tokens.controlled) {
      game.cub.removeCondition("Abri partiel", token, {warn : false});
      game.cub.removeCondition("Abri important", token, {warn : false});
    }
  }
}
start();