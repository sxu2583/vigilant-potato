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
          $('#navbar').css('background-color', '#f8f8f8');
       } else {
          $('#navbar').css('background-color', 'transparent');
       }
   });
});

