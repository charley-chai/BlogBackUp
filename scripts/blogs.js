$(window).ready(function () {

    $("#expandmore").click(function () {
        $("#class_sub_nav").slideToggle();
        $("#next").toggleClass("hidden");
        $("#next1").toggleClass("hidden");
    });
});
