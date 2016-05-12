(function(win, doc) {
  'use strict';
  
  var $headerToggle = doc.querySelector('.header-toggle');
  var $headerMenu = doc.querySelector('.header-menu');

  $headerToggle.addEventListener('click', function() {
      $headerMenu.classList.toggle('is-active');
  });
})(window, document);
