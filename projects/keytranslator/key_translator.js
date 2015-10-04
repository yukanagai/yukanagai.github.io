$(function() {

	$('#input').keypress(function(event) {
		if (event.which == 13) {
			event.preventDefault();
			var inputTxt = $('.inputBox');
			var outputTxt = $('.outputBox');
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
		// Clear the <input type="text">
    	// inputTxt.val("");
		}
	});
});
