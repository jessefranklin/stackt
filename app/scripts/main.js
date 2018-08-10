var resizeTimer;

$(document).ready(function(){
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
          el.css({top: top});
        });
      });

    }, 250);
    
  });

  // Menu toggle
  var $hamburger = $(".hamburger");
  $hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");
    $('.menu').toggleClass('is-active');
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
      el.css({top: top});
    });
  });
}