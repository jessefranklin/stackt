

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



  });
  
  var doc = document.documentElement;
  $('.brand-logo-black').each(function(i, obj) {
    var el = $(this);
    var topContainer = $(this).closest('section').offsetTop;
    $(window).on('scroll', function() {
      var top = (window.pageYOffset || doc.scrollTop) - $('.stackt-hero').outerHeight();
      el.css({top: top});
    });
  });
  
});

