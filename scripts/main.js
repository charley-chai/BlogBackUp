var expand = false;
var first = true;

$(window).ready(function(){
  $(document.body).height($(window).height());

  $("#expand").click(function(){
    $("#xxxx").toggleClass("nav_active");
    var nav = $("#sub_nav");
    nav.height($(window).outerHeight());
    nav.slideToggle();
    expand = !expand;

    if (expand) {
      $('html,body').animate({ scrollTop: 0 }, 500, function(){
        $("#home").addClass("home");
      });
    } else {
      $("#home").removeClass("home");
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
  $("footer").fadeOut(700, function () {

    if (!expand){
      $("#home").toggleClass("home");
    }
    $("#main").slideUp(500);
  });
}