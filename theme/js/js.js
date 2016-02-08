(function ($) {

  if (typeof Drupal != 'undefined') {
    Drupal.behaviors.projectName = {
      attach: function (context, settings) {
        init();
      },

      completedCallback: function () {
        // Do nothing. But it's here in case other modules/themes want to override it.
      }
    }
  }

  $(function () {
    if (typeof Drupal == 'undefined') {
      init();
    }

    $(window).load(function() {

    });
  });

  function init() {
    initFlexslider();
    initFullWidthBlock('.b-desc');

  }

  function initFlexslider() {
    $(window).load(function () {
      $('.flexslider').flexslider({
        animation: "slade",
        animationLoop: false,
        slideshow: false,
        slideshowSpeed: 6000,
        pauseOnHover: true,
        controlNav: true,
        directionNav: false,
        prevText: "",
        nextText: "",
        direction: "vertical"
      });
    });
  }

  function initFullWidthBlock(blok) {
    var $elements = $(blok),
      minWidth = 0;

    $(window).on('resize', setPosition);
    setPosition();

    function setPosition() {
      var $winWidth = $(window).outerWidth(),
        width;

      if ($winWidth > minWidth) {
        width = $winWidth;
      } else {
        width = minWidth;
      }

      $elements.width(width);
      $elements.css('margin-left', '-' + width / 2 + 'px');
    }
  }

})(jQuery);