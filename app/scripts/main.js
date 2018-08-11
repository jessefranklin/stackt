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


    blackmask();

    setTimeout(function(){
      $('body,html').css({'overflow-y':'auto'});
    },1000);

    var logoM = 100;

    if(Modernizr.mq('(max-width: 990px)')){
      logoM = 40;
    }

    var $header = $('body').find('.stackt-discover'),
        $sticky = $('body').find('.sticky');

    $(window).on('scroll', function() {
      var top = $('html').scrollTop() || $('body').scrollTop();
      if(top > $header.offset().top+logoM){
        $sticky.addClass('show');
      } else {
        $sticky.removeClass('show');
      }
    });
  });

  $(window).on('resize',function(){

    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {   

      $('.brand-logo-black').each(function(i, obj) {
        var el = $(this);
        var t = $(this).closest('section');
        var topContainer = t.offset().top;
        var top = (window.pageYOffset || document.scrollTop) - topContainer;
        el.css({top: top});
        $(window).on('scroll', function() {
          var top = (window.pageYOffset || document.scrollTop) - topContainer;
          if(!el.hasClass('show')){
            el.css({top: top});
          }
        });
      });

    }, 250);
    
  });
  
});


function blackmask(){
  var doc = document.documentElement;
  $('.brand-logo-black').each(function(i, obj) {
    var el = $(this);
    var t = $(this).closest('section');
    var topContainer = t.offset().top;
    $(this).css('opacity',1);
    $(window).on('scroll', function() {
      var top = (window.pageYOffset || doc.scrollTop) - topContainer;
      if(!el.hasClass('show')){
        el.css({top: top});
      }
    });
  });
}