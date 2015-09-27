$(function() {

  $( window ).ready(function() {
      var wHeight = $(window).height();
      $('.slide')
        .height(wHeight)
        .scroll({
          scrollOffset : -50,
          scrollingInView : function(elem) {

            var bgColor = elem.data('background');

            $('body').css('background-color', bgColor);
          }
        });

    });

});
