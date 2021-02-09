!(function($) {
  "use strict";

  // Init AOS
  function aos_init() {
    AOS.init({
      duration: 800,
      once: true
    });
  }
  $(window).on('load', function() {
    aos_init();
  });

})(jQuery);