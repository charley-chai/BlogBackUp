$(window).ready(function(){

  $(document.body).css({
    "overflow-x": "hidden",
    "overflow-y": "hidden"
  });

  var expand = false;

  $("#expand").click(function(){
    $("#xxxx").toggleClass("nav_active");
    var nav = $("#ssub_nav");
    nav.toggleClass("small_nav");
    nav.height($(window).outerHeight());
    $(document.body).addEventListener('touchmove', function (event) {
      event.preventDefault();
    }, false);
    expand = !expand;

    if (expand){
      $('html,body').animate({ scrollTop: 0 }, 500);
      $(document.body).css({
        "overflow-x": "hidden",
        "overflow-y": "hidden"
      });
      $("body").on("touchmove", function (event) {
        event.preventDefault;
      }, false);
    } else{
      $(document.body).css({
        "overflow-x": "auto",
        "overflow-y": "auto"
      });
    }
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

    if (!expand){
      $(document.body).css({
        "overflow-x": "auto",
        "overflow-y": "auto"
      });
    }
    $("#main").remove();
  });


}