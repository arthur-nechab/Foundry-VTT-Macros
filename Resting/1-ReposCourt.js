// 1h d’activité sans effort (sieste, repas)
// Vous regagnez vos compétences de repos court
// Tous les dés de vie peuvent être dépensés

let actorD = game.actors.get(args[0].actor._id);
const item = actorD.items.getName("ItemName");

// await item1.update({"data.uses.value": Math.min(item.data.data.uses.value + 1, item.data.data.uses.max)});
await item.update({"data.uses.value": item.data.data.uses.max});