/*This function searches for a div or id and then based off of that
 *changes the color of the nav bar from transparent to a certain color
 *the id being looked by this function is "startchange" */
$(document).ready(function(){
   var scroll_start = 0;
   var startchange = $('#startchange');
   var offset = startchange.offset();
   $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $('#navbar').css('background-color', '#191e28');
       } else {
          $('#navbar').css('background-color', 'transparent');
       }
   });
});


/*Scrolling for chevron*/
var amountScrolled = 300;

$(window).scroll(function() {
  if ( $(window).scrollTop() > amountScrolled ) {
    $('a.back-to-top').fadeIn('slow');
  } else {
    $('a.back-to-top').fadeOut('slow');
  }
});

$('a.back-to-top').click(function() {
  $('html, body').animate({
    scrollTop: 0
  }, 700);
  return false;
});


console.log("Hey there, hope you liked the site. If you're here cause you saw something you liked ;) feel free to send me a message")
