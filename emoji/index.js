$(document).ready(function(){
    $('.next').on('click',function(){
        var currentdiv = $('.active');
        var nextdiv = currentdiv.next();
        
        if(nextdiv.length){
            currentdiv.removeClass('active').css('z-index','-10px');
            nextdiv.addClass('active').css('z-index','10px');
        }
    });
    $('.prev').on('click',function(){
        var currentdiv = $('.active');
        var prevdiv = currentdiv.prev();
        
        if(prevdiv.length){
            currentdiv.removeClass('active').css('z-index','-10px');
            prevdiv.addClass('active').css('z-index','10px');
        }
    });
    
    //skin

    $('#skin1').on('click',function(){
        $('.emojiskin')[0].src = $('#skin1')[0].src
    })
    $('#skin2').on('click',function(){
        $('.emojiskin')[0].src = $('#skin2')[0].src
    })
    $('#skin3').on('click',function(){
        $('.emojiskin')[0].src = $('#skin3')[0].src
    })

    //eyes

    $('#eye1').on('click',function(){
        $('.emojieye')[0].src = $('#eye1')[0].src
    })
    
    $('#eye2').on('click',function(){
        $('.emojieye')[0].src = $('#eye2')[0].src
    })
    
    $('#eye3').on('click',function(){
        $('.emojieye')[0].src = $('#eye3')[0].src
    })
    
    $('#eye4').on('click',function(){
        $('.emojieye')[0].src = $('#eye4')[0].src
    })
    
    $('#eye5').on('click',function(){
        $('.emojieye')[0].src = $('#eye5')[0].src
    })
    $('#eye6').on('click',function(){
        $('.emojieye')[0].src = $('#eye6')[0].src
    })
    
    //mouth
    $('#mouth1').on('click',function(){
        $('.emojimouth')[0].src = $('#mouth1')[0].src
    })
    
    $('#mouth2').on('click',function(){
        $('.emojimouth')[0].src = $('#mouth2')[0].src
    })
    
    $('#mouth3').on('click',function(){
        $('.emojimouth')[0].src = $('#mouth3')[0].src
    })
    
    $('#mouth4').on('click',function(){
        $('.emojimouth')[0].src = $('#mouth4')[0].src
    })
    
    $('#mouth5').on('click',function(){
        $('.emojimouth')[0].src = $('#mouth5')[0].src
    })


})