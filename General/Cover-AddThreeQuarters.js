// Ajoute la condition "Abri important" sur les tokens sélectionnés
async function start() {
  if (token === undefined) { ui.notifications.warn("Pas de token sélectionné"); } else {
    for (let token of canvas.tokens.controlled) {
      game.cub.addCondition("Abri important", token, {warn : false});
    }
  }
}
start();