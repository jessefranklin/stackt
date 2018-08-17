var resizeTimer;

$(document).ready(function(){
  $(document).scrollTop(0);

  //Animation library

  $(window).on('load',function(){
    AOS.init({
        offset: 100,
        duration: 600,
        easing: 'ease-in-out',
        delay: 100,
        once: false
      });

    setTimeout(function(){
      blackmask();
      $('.brand-logo-black').css({'opacity':1})
    },250);

  
  });

  $(window).on('resize',function(){

    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {  
      $('.mask-fixed').css({'height':'auto','position':'relative'});
      $('.mask-logo-blk').each(function(i, obj) {
        var x = $(this).height();
        $(this).height(x);
        $(this).find('.mask-fixed').css({'height':x,'position':'absolute'});
      });

    }, 250);
    
  });
  

   var $header = $('body').find('.stackt-discover'),
        $sticky = $('.stackt-discover').find('.brand-logo-black');

    $(window).on('scroll', function() {
      var top = $('html').scrollTop() || $('body').scrollTop();
      if(top > $header.offset().top){
        $sticky.addClass('show');
      } else {
        $sticky.removeClass('show');
      }
    });

});


function blackmask(){
  var doc = document.documentElement;

  $('.mask-logo-blk').each(function(i, obj) {
      var x = $(this).height();
      $(this).height(x);
      $(this).find('.mask-fixed').css({'height':x,'position':'absolute'});

  });
}