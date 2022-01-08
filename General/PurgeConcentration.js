// Supprime l'effet "Concentré" sur les tokens sélectionnés
async function start() {
  if (token === undefined) { ui.notifications.warn("Pas de token sélectionné"); } else {
    for (let token of canvas.tokens.controlled) {
      game.cub.removeCondition("Concentré", token, {warn : false});
    }
  }
}

start();