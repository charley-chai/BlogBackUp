$(window).ready(function(){
  $(document.body).css({
    "overflow-x": "hidden",
    "overflow-y": "hidden"
  });

  $("#next").click(function () {
    $("footer").fadeOut("fast");
    $("#main").slideUp(200, function(){
      $(document.body).css({
        "overflow-x": "auto",
        "overflow-y": "auto"
      });
    });
  });
});