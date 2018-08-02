
$(document).ready(function(){

	//Hero 
	var owl = $('#tenant-carousel');

	owl.owlCarousel({
		autoplay: false,
		autoplayHoverPause: true,
		nav:true,
		dots:true,
		lazyLoad:true,
		loop:true,
		items: 1,
		slideSpeed : 800,
        paginationSpeed : 800,
		video:true
	});
	
	

});
