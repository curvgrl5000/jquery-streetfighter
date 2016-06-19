$(document).ready (function() {
	$('.ryu').hover(function() {
		// alert('mouse entered .ryu div');
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		//alert('mouse left');
		$('.ryu-still').show();
		$('.ryu-ready').hide();
	});

});