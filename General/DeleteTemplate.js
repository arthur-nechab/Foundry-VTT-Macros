// Supprime l'intégralité des templates sur la scène
let ids = canvas.templates.placeables.filter(i => i.owner).map(i => i.id)
canvas.scene.deleteEmbeddedDocuments("MeasuredTemplate", ids)