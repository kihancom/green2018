$(function(){
  //slidemenu
    $('.menu_depth1>li').mouseover(function () {
        $(this).children('.menu_depth2').stop().slideDown();
    })
$('.menu_depth1>li').mouseleave(function () {
    $(this).children('.menu_depth2').stop().slideUp();
});
    
  //main slide    
var now = 1;
var max = 3;
var width = 1000;
    
var slide = setInterval(function(){    // 실행할때 마다 실행
    if(now<3){
     $('.mainslide>ul').animate({
     'left':(now*width*(-1)) +'px' 
    },600);
    now++;
    }else{
      $('.mainslide>ul').animate({
      'left':'0px'
    },600);
     now = 1;
    }
    },2000);
    
    
  //banner layer popup 
$('.col3 a').click(function(){
    $('#modal').addClass('on');
})
 $('#modal button').click(function(){
     $('#modal').removeClass('on');
 })   
    
  //a link mouseover 일때 효과
$('a').focusin(function(){
    $(this).css('color','#F00')
})
$('a').focusout(function(){
    $(this).css('color','inherit')
})   
    
});
