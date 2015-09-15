$(function() {

	var translateButton = $('button');
	var inputTxt = $('.inputBox');
	var outputTxt = $('.outputBox');

 	translateButton.on('click', function(event) {
 		event.preventDefault();

		var inputVal = inputTxt.val().toLowerCase();

		var outputVal = inputVal.replace('command', '⌘')
								.replace('tab', '⇥')
								.replace('return', '⏎')
								.replace('option', '⌥')
								.replace('control', '⌃')
								.replace('escape', '⎋')
								.replace('left', '←')
								.replace('down', '↓')
								.replace('up', '↑')
								.replace('right', '→')
								.replace('shift', '⇧')
								.replace('eject', '⏏')
								.replace('caps lock', '⇪');

		$(outputTxt).val(outputVal);
	})


});
