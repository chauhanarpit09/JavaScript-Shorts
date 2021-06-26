import Game from "./Game.js";
import Gameview from "./Gamview.js";
let game = new Game();
let gameview = new Gameview();

let tiles = document.querySelectorAll('.boardtile');
let restart = document.querySelector('.restartbutton');

tiles.forEach((tile) => {
    tile.addEventListener("click",()=>{
        ontileClick(tile.dataset.index);
    })
})
function ontileClick(ind){
    game.makemove(ind);
    game.nexturn();
    gameview.updateboard(game);
}


restart.addEventListener("click",()=>{
    game.endgame();
    gameview.endgame(game);
})
