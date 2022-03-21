$(function(){
    
    var $bar=$('.side-nav').find('.bars');

    $bar.click(
        function(){

            if($('.slider').hasClass('open')){
            // 持ってたら
                
                $('.slider').removeClass('open');
                $('.slider').slideUp(300);
            
            $bar.children('.fa-bars').css('display','block');
            $bar.children('.fa-xmark').css('display','none');
            
            }else{
            // 持ってなかったら
                $('.slider').addClass('open');
                $('.slider').slideDown(500);
                $bar.children('.fa-xmark').css('display','block');
                $bar.children('.fa-bars').css('display','none');
            };
        }
    );
    $('section').click(
        function(){
        if($('.slider').hasClass('open')){
            $('.slider').removeClass('open');
            $('.slider').slideUp(300);

            $bar.children('.fa-bars').css('display','block');
            $bar.children('.fa-xmark').css('display','none');
        };



    });    

});
