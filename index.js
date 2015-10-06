$(function() {

	// change BG color on click:
	// $('.nav a').click(function() {
	// 	var colors = ['#E8D5A5', '#C7ABB6', '#DAFFEF', '#FFE5D9', '#DDE6F2'];
	// 	var randColor = colors[Math.floor(Math.random()*colors.length)];
	// 	$('.pageWrapper').css('background-color', randColor);
	// });

	$('#palmleaf').click(function() {
		$(this).addClass('animated tada').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', 
			function() {
				$(this).removeClass('animated tada');
			});
	});

});
