
$(document).ready(function(){

	//Hero 
	var owl = $('#stackt-hero');

	owl.owlCarousel({
		autoplay: false,
		autoplayHoverPause: true,
		nav:false,
		dots:true,
		lazyLoad:true,
		loop:true,
		items: 1,
		slideSpeed : 800,
		paginationSpeed : 800,
		video:true,
		margin:10,
		responsiveClass:true,
		responsive:{
			767:{
				items:1,
				nav:false
			}
		}
	});

	$(window).on('load',function(){
		if($('.owl-item.active video').length){
			$('.owl-item.active video').get(0).play();
		}	
	});

	owl.on('translate.owl.carousel',function(e){
		$('.blur-active').removeClass('blur-active');
		$('#stackt-hero').removeClass('discover-active');
		$('div.hero-discover-container').find('.aos-init').removeClass('aos-animate');
		$('div.hero-discover-container').hide();
		$('.owl-item video').each(function(){
		  $(this).get(0).pause();
		});
	});

	owl.on('translated.owl.carousel',function(e){
		if($('.owl-item.active video').length){
			$('.owl-item.active video').get(0).play();
		}
	});

	if(!isMobile()){
		$('.owl-item .item').each(function(){
		  var attr = $(this).attr('data-videosrc');
		  if (typeof attr !== typeof undefined && attr !== false) {
			var videosrc = $(this).attr('data-videosrc');
			$(this).prepend('<video muted><source src="'+videosrc+'" type="video/mp4"></video>');
		  }
		});
		$('.owl-item.active video').attr('autoplay',true).attr('loop',true);
	}

	$('body').on('click','.js-pause',function(){
		$(this).parent('div').addClass('paused');
		$('.owl-item.active video').get(0).pause();
	});

	setTimeout(function(){
		$('div.hero-discover-container').find('.aos-init').removeClass('aos-animate');
	},500);

	$('body').on('click','.js-play',function(){
		$(this).parent('div').removeClass('paused');
		$('.owl-item.active video').get(0).play();
	});

	$('body').on('click','.js-discover',function(){
		$(this).closest('div.hero-component').find('div.hero-discover-container').find('.aos-init').removeClass('aos-animate');
		$(this).closest('div.hero-component').addClass('blur-active');
		$('#stackt-hero').addClass('discover-active');
		$(this).closest('div.hero-component').find('div.hero-discover-container').show();
		$(this).closest('div.hero-component').find('div.hero-discover-container').find('.aos-init').addClass('aos-animate');
		$('.owl-item.active video').get(0).pause();
	});

	$('body').on('click','.js-close',function(){
		var view = this;
		$('div.hero-discover-container').fadeTo(600, 0, 
			function(){
				$('.blur-active').removeClass('blur-active');
				$('#stackt-hero').removeClass('discover-active');
				$('div.hero-discover-container').hide();
				$(this).closest('div.hero-component').find('div.hero-discover-container').find('.aos-init').removeClass('aos-animate');
				$('div.hero-discover-container').css('opacity',1);
			}
		);
		$('.owl-item.active video').get(0).play();
	});

});



function isMobile(width) {
	if(width == undefined){
		width = 719;
	}
	if(window.innerWidth <= width) {
		return true;
	} else {
		return false;
	}
}