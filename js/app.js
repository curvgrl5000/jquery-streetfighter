$(document).ready ( function() {
	$('.ryu').hover(function() {
		// alert('mouse entered .ryu div');
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave( function() {
		//alert('mouse left');
		$('.ryu-still').show();
		$('.ryu-ready').hide();
	})
	.mousedown ( function() {
		console.log("mousedown");
		$('.ryu-still').hide();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').show();

	})
	.mouseup( function ()  {
		console.log("mouseup");
		$('.ryu-ready').show();
		$('.ryu-throwing').hide();
		$('.hadouken').hide();
	});
	
});