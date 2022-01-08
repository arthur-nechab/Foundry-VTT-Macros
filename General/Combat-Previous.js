// Va au tour précédent et déplace la caméra sur le token
(async () => {
await game.combats.active.previousTurn()
token = game.combats.active.current.tokenId
canvas.tokens.get(token).control()
const position = canvas.tokens.get(token).position
canvas.animatePan(position)
})();