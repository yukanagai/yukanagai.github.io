$(function() {

	var $root = $('html, body');
	$('a').click(function() {
	    var href = $.attr(this, 'href');
	    $root.animate({
	        scrollTop: $(href).offset().top
	    }, 1000, function () {
	        window.location.hash = href;
	    });
	    return false;
	});

	$(window).scroll(function(){
    windowTop = $(window).scrollTop();
    $('#cloud1').css({
      'transform':'translateX('+(windowTop) * .3 +'px)'
    });

    $('#cloud2').css({
      'transform':'translateX('+(windowTop) * .7 +'px)'
    });
  });

  // $(window).scroll(function () {
  //     console.log($(window).scrollTop())
  //     if ($(window).scrollTop() > 51) {
  //       $('.navbar').addClass('navbar-fixed');
  //     }
  //     if ($(window).scrollTop() < 50) {
  //       $('.navbar').removeClass('navbar-fixed');
  //     }
  //   });


});
