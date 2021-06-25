var A = document.getElementById('a')
var S = document.getElementById('s')
var D = document.getElementById('d')
var F = document.getElementById('f')
var G = document.getElementById('g')
var H = document.getElementById('h')
var J = document.getElementById('j')
var K = document.getElementById('k')
var L = document.getElementById('l')

var audioA = document.getElementById('A')
var audioS = document.getElementById('S')
var audioD = document.getElementById('D')
var audioF = document.getElementById('F')
var audioG = document.getElementById('G')
var audioH = document.getElementById('H')
var audioJ = document.getElementById('J')
var audioK = document.getElementById('K')
var audioL = document.getElementById('L')



document.body.addEventListener("keydown",function(e){
    if(e.keyCode == 65){
        box(A);
        audioA.play();
    }
    else if(e.keyCode == 83){
        box(S);
        audioS.play();
    }
    else if(e.keyCode == 68){
        box(D);
        audioD.play();
    }
    else if(e.keyCode == 70){
        box(F);
        audioF.play();
    }
    else if(e.keyCode == 71){
        box(G);
        audioG.play();
    }
    else if(e.keyCode == 72){
        box(H);
        audioH.play();
    }
    else if(e.keyCode == 74){
        box(J); 
        audioJ.play();
    }
    else if(e.keyCode == 75){
        box(K);
        audioK.play();
    }
    else if(e.keyCode == 76){
        box(L);
        audioL.play();
    }

})

function box(a){
    a.style.borderColor = "yellow";
    a.style.boxShadow =  "3px 3px 3px  #888888";
    var i = setInterval(function(){
        a.style.borderColor = "white";
        a.style.boxShadow =  "0px 0px 0px 0px white";
        clearInterval(i);
    },500)
}

