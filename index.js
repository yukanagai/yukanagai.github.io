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



// $(document).ready(function(){
  /*--------------------
    BACKGROUND STUFF
  ----------------------*/
    // changebackground();
    // setTimeout(function(){
    //   $("body").removeClass("noTransition");
    //   $("fixedBg").removeClass("noTransition");
    //   changebackground();
    // }, 2000)
    // setInterval(function(){
    //   changebackground();
    // }, 20000);


    /*--------------------
      LOOPING COLORS
    ----------------------*/
  //   loopColors();
  //     setTimeout(function(){ // hack change bg since the beginning
  //       loopColors();
  //     }, 2000)
  //     setInterval(function(){
  //       loopColors();
  //   }, 10000);
  // });


});
