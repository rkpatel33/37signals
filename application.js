
$(document).ready(function(){

	$('.products .bc').on('mouseenter', function() {
		$('header').hide();
		$(this).closest('body').find('.bc.banner').removeClass("hidden");
		$(this).closest('body').find('.bc.banner').addClass("banner");
	});

	$('.products .bc').on('mouseleave', function() {
		$('header').show();
		$(this).closest('body').find('.bc.banner').addClass("hidden");
		$(this).closest('body').find('.bc.banner').addClass("hidden");
	});
	



	$('.products .hr').on('mouseenter', function() {
		$('header').hide();
		$(this).closest('body').find('.hr.banner').removeClass("hidden");
		$(this).closest('body').find('.hr.banner').addClass("banner");
	});

	$('.products .hr').on('mouseleave', function() {
		$('header').show();
		$(this).closest('body').find('.hr.banner').addClass("hidden");
		$(this).closest('body').find('.hr.banner').addClass("hidden");
	});



	$('.products .cf').on('mouseenter', function() {
		$('header').hide();
		$(this).closest('body').find('.cf.banner').removeClass("hidden");
		$(this).closest('body').find('.cf.banner').addClass("banner");
	});

	$('.products .cf').on('mouseleave', function() {
		$('header').show();
		$(this).closest('body').find('.cf.banner').addClass("hidden");
		$(this).closest('body').find('.cf.banner').addClass("hidden");
	});


});

