var screen = document.getElementById('screen')
time();
var da = document.getElementById('Date')
var ti = document.getElementById('Time')
var he = document.getElementById('heart')




function time(){
   i =  setInterval(function()
    {
        screen.style.top = "46%";
        var d= new Date()
        var h = d.getHours()
        var m = d.getMinutes()
        var s = d.getSeconds()
        if(h <10)
            h = "0"+h ;
        if(m<10)
            m = "0"+m;
        if(s<10)
            s = "0"+s;
        screen.innerHTML = h+" : "+m+" : "+s;
        da.addEventListener("click",function(){
            clearInterval(i);
            date();
            
        })
        ti.addEventListener("click",function(){
            clearInterval(i);
            time();
            
        })
        he.addEventListener("click",function(){
            heart();
            clearInterval(i);
            
        })

        

    },1000)

}


 

function date(){
    i = setInterval(function()
    {
        var d = new Date();
        screen.style.top = "46%";

        
        var temp = d.getDay();
        switch(temp){
            case 1: temp = "Monday";
                    break;
            case 2: temp = "Tuesday";
                    break;
            case 3: temp = "Wednesday";
                    break;
            case 4: temp = "Thursday";
                    break;
            case 5: temp = "Friday";
                    break;
            case 6: temp = "Saturday";
                    break;
            case 7: temp = "Sunday";
                    break;
            
        }
        screen.innerHTML = d.getDate() + "-" + d.getMonth() + "-" + d.getFullYear()+"<br>" +"  "+ "<h6>"+temp+"</h6>";
        ti.addEventListener("click",function(){
            clearInterval(i);
            time();
            
        })
        he.addEventListener("click",function(){
            heart();
            clearInterval(i);
            
            
        })


    },1000)

}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
  }

function heart(){
            screen.innerHTML = ""
            screen.style.top = "35%";
            var i = document.createElement('img')
            i.src = "pulse.png"
            i.style.width="100px";
            i.style.height="80px";

            var q = document.createElement('h4')
            document.getElementById("screen").appendChild(i)
            document.getElementById("screen").appendChild(q)
            
            q.style.textAlign = "center";
            setInterval(function(){

                q.innerHTML = getRandomInt(60,100)
                
            },1000)
            
           


           
            
}
            
var black = document.getElementById('black')
var red = document.getElementById('red')
var pur = document.getElementById('pur')
var pink = document.getElementById('pink')

var img = document.getElementById('img')

black.style.backgroundColor = "#23211f";
red.style.backgroundColor = "red";
pur.style.backgroundColor = "#565681";
pink.style.backgroundColor = "#8a5362";

black.addEventListener("click",function(){
    img.src = "2.jpg";
    black.style.borderColor = " #e9c7be"
    
})

red.addEventListener("click",function(){
    img.src = "1.jpg";
    red.style.borderColor = " #e9c7be"
    
})

pur.addEventListener("click",function(){
    img.src = "3.jpg";
    pur.style.borderColor = " #e9c7be"
    
})

pink.addEventListener("click",function(){
    img.src = "4.jpg";
    red.style.borderColor = " #e9c7be"
    
})