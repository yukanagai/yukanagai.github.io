$(function() {

	// change BG color on click:
	$('.nav a').click(function() {
		var colors = ['#E8D5A5', '#C7ABB6', '#DAFFEF', '#FFE5D9', '#DDE6F2'];
		var randColor = colors[Math.floor(Math.random()*colors.length)];
		$('.pageWrapper').css('background-color', randColor);
	});



	// open About page on click
	// $('#aboutMe').click(function(){
	// 	$(this).css({position:'fixed', display: block, height: '100%', width: '100%', background-color: 'blue', opacity: 0.8});
	// });

});
