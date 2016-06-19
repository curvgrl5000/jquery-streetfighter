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
		//console.log("mousedown");
		playHadouken()
		$('.ryu-still').hide();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate(
			{'left' : '1020px'},
			500,
			function() {
				$(this).hide();
				$(this).css('left' , '520px' );
			}
		);
	})
	.mouseup( function ()  {
		//console.log("mouseup");
		$('.ryu-ready').show();
		$('.ryu-throwing').hide();
	});

	function playHadouken () {
		$('#hadouken-sound')[0].volume = 0.5;
		$('#hadouken-sound')[0].load();
	 	$('#hadouken-sound')[0].play();
	}
	
});