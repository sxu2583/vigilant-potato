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


/*This is for the snow effect*/
var Snow = function(){

  var c = this;
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  W = canvas.width;
  H = canvas.height;

  this.init = function(){

    c.particles = [];
    c.colors = [
      '#ffffff',
      '#ffffff',
      '#ffffff',
      '#ffffff',
      '#ffffff',
      '#ffffff',
      '#ffffff',
      '#ffffff',
      '#ffffff',
      '#ffffff',
    ];


    c.mp = 100; //max particles

    for(var i = 0; i < c.mp; i++)
    {
      var size = Math.random()*4+5;
      c.particles.push({
        x: Math.random()*W, //x-coordinate
        y: Math.random()*H, //y-coordinate
        w: size,
        h: size,
        d: Math.random()*20 +30, //density
        vx:(Math.random()*7) - 3.5,
        fill: c.colors[Math.floor(Math.random() * c.colors.length)],
        s: (Math.random() * 0.2) - 0.1
      });
    }

    setInterval(function(){
      c.render();
    }, 1000/30);

  };

  this.resize = function(){
    // Nothing
  };

  //Lets draw the flakes
  this.render = function ()
  {
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, W, H);

    ctx.beginPath();
    for(var i = 0; i < c.mp; i++)
    {
      var p = c.particles[i];
      ctx.fillStyle = p.fill;
      ctx.fillRect(p.x, p.y, p.w, p.h);
    }
    ctx.fill();
    c.update_positions();
  };

  this.update_positions = function ()
  {
    for(var i = 0; i < c.mp; i++){
      var p = c.particles[i];
      p.a += p.s;
      p.y += p.d/10;
      p.x += p.vx;

      if(p.x > W+5 || p.x < -5 || p.y > H){
        if(i%3 > 0){
          p.x = Math.random()*W;
          p.y = -10;
        }
      }
    }
  };

  this.init();
};

var confetti = new Snow();


/*Scrolling effect*/
$(function() {
    $('a[href*=#]').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });
});

/*This should remove the navbar highlighting*/
$('li').click(function(){
     $(this).removeClass('active');
});

