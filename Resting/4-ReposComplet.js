//48h de repos dans un lieu calme, confortable et sans danger (village, ville, forteresse)
// Réinitialisation complète des points de vie, des dés de vies et des emplacements de sorts
//Vous gagnez votre DV en points de vie temporaire :)
let actorD = game.actors.get(args[0].actor._id);
let actorI = actorD.classes["CLASS NAME HERE"];
const r = new Roll("HIT DICE HERE").evaluate(); // exemple : 1d10
const temp = r.total;

actorD.updateEmbeddedDocuments("Item", [{_id: actorI.id, "data.hitDiceUsed": 0}]);
actorD.update({'data.attributes.hp.temp' : temp});

await actorD .longRest({dialog: false, chat: false, newDay: false});