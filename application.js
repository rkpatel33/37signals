
$(document).ready(function(){

	$('.bc').on('mouseenter', function() {
		$('.header').hide();
		$('.hidden bc').show();
	});

	$('.bc').on('mouseleave', function() {
		$('.header').show();
		$('.hidden bc').hide();
	});
	

});

