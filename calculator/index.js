
function append(val){
    let y = document.getElementById(val).value;
    let x = document.getElementById("i").value;
    if(x=="0")
        x=y;
    else
        x = x+y;
    document.getElementById("i").value = x;
}

function solve(){
    let x = document.getElementById("i").value;
    let y = eval(x);
    document.getElementById("i").value = y;
  
  
}

function clearo(){
 
    let x = 0;
    document.getElementById("i").value = x;
  
}

function clearone(){
    let x = document.getElementById("i").value;
    if(x.length==1)
        x=0;
    else
        x = x.slice(0,-1);
    document.getElementById("i").value = x;
  
}


