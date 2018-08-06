
$(document).ready(function () {

	//Hero 
	var owltenant = $('#tenant-carousel');
	var query = Modernizr.mq('(max-width: 768px)');

	owltenant.owlCarousel({
		autoplay: false,
		autoplayTimeout: 5000,
		autoplayHoverPause: false,
		nav: true,
		dots: true,
		loop: true,
		items: 1,
		responsiveClass: true,
		margin: 10,
		stagePadding: 20,
		responsive: {
			768: {
				items: 1,
				nav: true,
				margin: 0,
				stagePadding: 0
			}
		}
	});
});
//# sourceMappingURL=tenant.js.map
