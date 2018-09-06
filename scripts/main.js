$(window).ready(function(){
  $(document.body).css({
    "overflow-x": "hidden",
    "overflow-y": "hidden"
  });

  $("#expand").click(function(){
    $("#xxxx").toggleClass("nav_active");
    var nav = $("#ssub_nav");
    nav.toggleClass("small_nav");
    nav.height($(window).outerHeight());
    nav.addEventListener('touchmove', function (event) {
      event.preventDefault();
    }, false);
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
    $("#main").remove();
  });


}