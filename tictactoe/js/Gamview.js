export default class Gameview{

    constructor(){
    }

    updateboard(game){
        this.updateturn(game)
        let win = game.findwinner() 

        for(let i=0;i<game.board.length;i++){
            const tile = document.querySelector(`.boardtile[data-index="${i}"]`)
            if(game.board[i] && game.board[i]==="X")
                tile.innerHTML = `<span class="play-x">${game.board[i]}</span>`
            if(game.board[i] && game.board[i]==="O")
                tile.innerHTML = `<span class="play-o">${game.board[i]}</span>`

            if(win && win.includes(i)){
                tile.classList.add("winner");
            }
        }

        
    }

    updateturn(game){
        if(!game.findwinner()){
            const playerx = document.querySelector('.playerx');
            const playero = document.querySelector('.playero');        
            playerx.classList.remove('active');
            playero.classList.remove('active');

            if(game.turn === "X")
                playerx.classList.add('active');
            if(game.turn === "O")
                playero.classList.add('active');
        } else {

        }
    }
    

    endgame(game){
        for(let i=0;i<game.board.length;i++){
            const tile = document.querySelector(`.boardtile[data-index="${i}"]`)
            tile.innerHTML ="";
        }

        const playerx = document.querySelector('.playerx');
        const playero = document.querySelector('.playero');
        playerx.classList.remove('active');
        playero.classList.remove('active');
        playerx.classList.add('active');

         for(let i=0;i<game.board.length;i++){
            const tile = document.querySelector(`.boardtile[data-index="${i}"]`)
            tile.classList.remove("winner");
        }

    }

}