$(document).ready(function() {
    setTimeout(function() {
    $('#preloader').fadeOut('slow');
  },100);



$(function(){
  $(".dropdown").hover(
    function() {
      $('.dropdown-menu', this).stop( true, true ).fadeIn("fast");
      $(this).toggleClass('open');
      $('b', this).toggleClass("caret caret-up");
    },
    function() {
      $('.dropdown-menu', this).stop( true, true ).fadeOut("fast");
      $(this).toggleClass('open');
      $('b', this).toggleClass("caret caret-up");
  });
});

});
