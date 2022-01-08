// Supprime tous les effets actifs du token sélectionné
let removeList = token?.actor?.effects.map(e=>e.id)
token?.actor?.deleteEmbeddedEntity("ActiveEffect", removeList)