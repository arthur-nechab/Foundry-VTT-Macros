// Va au tour suivant et déplace la caméra sur le token
(async () => {
await game.combats.active.nextTurn()
await delay(400)
token = game.combats.active.current.tokenId
canvas.tokens.get(token).control()
const position = canvas.tokens.get(token).position
canvas.animatePan(position)
})();
function delay(ms=400) {
return new Promise( resolve => setTimeout(resolve, ms) );
}