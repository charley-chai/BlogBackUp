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
  $("#main").slideUp(500);

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