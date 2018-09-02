$(window).ready(function(){
  $(document.body).css({
    "overflow-x": "hidden",
    "overflow-y": "hidden"
  });

  $("#next").click(function(){
    welcome_page_fade();
  });

  $("#home_nav").click(function(){
    welcome_page_fade();
  });
});

function welcome_page_fade() {
  var fade = anime({
    targets: '#main',
    delay: 500,
    duration: 2000,
    height: 0,
    translateY: -240
  });

  $("footer").fadeOut(700, function () {
    $(document.body).css({
      "overflow-x": "auto",
      "overflow-y": "auto"
    });
  });

  fade.finished.then(()=>{
    $("#main").remove();
  });
}