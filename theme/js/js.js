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
      initFlexslider();
    });
  });

  function init() {
    initFullWidthBlock('.b-desc');
    initCloneSlider();
    initElmsAnimation();

  }

  function initElmsAnimation() {
    var $elms = $('.el-with-animation');
    var animationEnd = [];

    $(window).on('resize scroll', checkScroll);

    checkScroll();

    function checkScroll() {
      if (animationEnd.length === $elms.length) return;

      for (var i = 0; i < $elms.length; i++) {
        var $currentEl = $elms.eq(i);
        var offsetTop = parseInt($currentEl.attr('data-offset-top'));

        if (!offsetTop) {
          offsetTop = $currentEl.height() / 2 + 50;
        }

        if (!$currentEl.hasClass('animating-end') && $(window).height() + $(window).scrollTop() > $currentEl.offset().top + offsetTop) {
          animate($currentEl);
        }
      }
    }

    function animate(el) {
      el.addClass('animating-end');
      animationEnd.push(1);
    }
  }

  function initCloneSlider() {
    $(".slider-d").clone().removeClass().addClass("slider-m").appendTo(".b-slider");
    $(".slider-m .flexslider").removeClass().addClass("mobile-flexslider");
  }

  function initFlexslider() {
    var config = {
      animation: "slade",
      animationLoop: false,
      slideshow: false,
      slideshowSpeed: 6000,
      pauseOnHover: true,
      controlNav: true,
      directionNav: false
    };

    $('.flexslider').flexslider($.extend(config, {
      direction: 'vertical'
    }));

    $('.mobile-flexslider').flexslider($.extend(config, {
      direction: 'horizontal'
    }));
  }

  function initFullWidthBlock(block) {
    var $elements = $(block),
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