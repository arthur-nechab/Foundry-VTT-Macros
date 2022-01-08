// Permet de choisir et de démarrer une playlist
let optionsText = "";
for (let index = 0; index < game.playlists.size; ++index) {
    console.log(game.playlists.contents[index]);
    const label = game.playlists.contents[index].name;
    optionsText += `<option value="${index}">${label}</option>`;
}

let _applyChanges = false;

let d = new Dialog({
    title: "Musique",
    content: `
        <form>
            <div class="form-group">
                <label>Sélectionnez :</label>
                <select id="playlist-selection" name="playlist-selection">` + optionsText + `</select>
            </div>
        </form>
        `,
    buttons: {
        one: {
            icon: '<i class="fas fa-check"></i>',
            label: "Lancer",
            callback: () => _applyChanges = true
        },
        two: {
            icon: '<i class="fas fa-times"></i>',
            label: "Annuler",
            callback: () => _applyChanges = false
        }
    },
    default: "Cancel",
    close: html => {
        if (_applyChanges) {
            let _plName = parseInt(html.find('[name=playlist-selection]')[0].value) || "none";
            let _pl = game.playlists.getName(game.playlists.contents[_plName].name);
            if(_pl) {
                if (_pl.playing) {
                    // turn off
                    _pl.stopAll();
                } else {
                    // turn on
                    _pl.playAll();
                }
            }
            else {
                ui.notifications.error(`Aucune playlist valide n'existe !`);
            }            
        }
    }
}).render(true);