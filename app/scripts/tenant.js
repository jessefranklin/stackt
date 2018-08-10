
$(document).ready(function(){

	//Hero 
	var owltenant = $('#tenant-carousel');
	var query = Modernizr.mq('(max-width: 768px)');

	owltenant.owlCarousel({
		autoplay:false,
		autoplayTimeout:5000,
		autoplayHoverPause:false,
		nav:true,
		dots:true,
		loop:true,
		items: 1,
		responsiveClass:true,
		margin: 10,
		stagePadding: 20,
		responsive:{
			768:{
				items:1,
				nav:true,
				margin: 0,
				stagePadding: 0,
			}
		}
	});
	
	$(window).on('load',function(){
		if(owltenant.find('.owl-item.active video').length){
			owltenant.find('.owl-item.active video').get(0).play();
		}	
	});

	owltenant.on('translate.owl.carousel',function(e){
		owltenant.find('.owl-item video').each(function(){
		  $(this).get(0).pause();
		});
	});

	owltenant.on('translated.owl.carousel',function(e){
		if(owltenant.find('.owl-item.active video').length){
			owltenant.find('.owl-item.active video').get(0).play();
		}
	});

	owltenant.on('click','.js-pause',function(){
		$(this).parent('div').addClass('paused');
		owltenant.find('.owl-item.active video').get(0).pause();
	});

	setTimeout(function(){
		$('div.hero-discover-container').find('.aos-init').removeClass('aos-animate');
	},500);

	owltenant.on('click','.js-play',function(){
		$(this).parent('div').removeClass('paused');
		owltenant.find('.owl-item.active video').get(0).play();
	});

});
