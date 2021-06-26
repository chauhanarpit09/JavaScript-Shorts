export default class Game{

    
    constructor(){
        this.board = new Array(9).fill(null);
        this.turn = "X";
    }
    makemove(i){
        if(this.board[i])
            return;
        if(this.findwinner())
            return;
        if(this.turn === "X")
            this.board[i] = "X"
        else if(this.turn === "O")
            this.board[i] = "O";
    }

    nexturn(){
        this.turn = this.turn==="X" ?"O":"X";
    }

    findwinner(){
        let wincomb = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]   
        ];

        for(const comb of wincomb){
            let [a,b,c] = comb;
            if(this.board[a] && this.board[a]===this.board[b] && this.board[a] === this.board[c]){
                return comb;
            }
        }
        return null;
    }

    endgame(){
        this.board.fill(null);
        this.turn = "X";
    }

}