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

  }

  function initFlexslider() {
    $(window).load(function () {
      $('.flexslider').flexslider({
        animation: "slade",
        animationLoop: false,
        slideshow: true,
        slideshowSpeed: 6000,
        pauseOnHover: true,
        controlNav: false,
        directionNav: true,
        prevText: "",
        nextText: ""
      });
    });
  }

})(jQuery);