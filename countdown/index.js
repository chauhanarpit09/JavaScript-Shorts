
console.clear();
var countdown = document.getElementById('c');
var img = document.getElementById('img');
var c = countdown.innerHTML;




var interval = setInterval(function(){
    if(c%2==0)
        i = "2.jpg";
    else
        i = "1.jpg";

    c = c>0?c-1:0;
    countdown.style.fontSize = c*40 + "px";
    img.src = i;
    countdown.innerHTML = c;
    img.style.width = c*10+"%";
    img.style.borderTopRightRadius = 30+"px";
    img.style.borderBottomRightRadius = 30+"px";
    
    if(c==0){
        clearInterval(interval);
    }

    
},1000);

