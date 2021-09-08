$(document).ready(function() {
  if (window.viewportSize) {
    var width = viewportSize.getWidth();
    $('body').append('<div id="viewportsize">Screen Width: '+width+'px</div>');
    $(window).resize(function() {
      width = viewportSize.getWidth();
      $('#viewportsize').html('Screen Width: '+width+'px');
    });
  }
});