$(function() {

  define([ 'jquery'], function ($) {
    'use strict';

  // CHANGING BC COLOR ON CLICK
  var $bgContainer = $('.main-content'),
        $modalGradient = $('.buy-modal'),
        // $pageWrapper = $('.page-wrapper');

        // function initReandomTemplate () {
        //   //7 possible templates
        //   var _template = Math.floor(Math.random() * (7 - 1)) + 1;
        //   $pageWrapper.addClass('bg-template'+_template);
        //   // $modalGradient.addClass('bg-template'+_template);
        // },

        loadColorSection: function(section) {

            var _colorIndex = 1;
            switch (section) {
                case 0:
                case 'about':
                    _colorIndex=1;
                break;
                case 1:
                case 'people':
                    _colorIndex=2;
                break;
                case 2:
                case 'point':
                    _colorIndex=3;
                break;
                case 3:
                case -1:
                case 'conference':
                    _colorIndex=4;
                break;
            }

            //remove all other color classes, add new one to background
            $pageWrapper.removeClass("color-1 color-2 color-3 color-4").addClass('color-' + _colorIndex);
            
        }


    };
});
