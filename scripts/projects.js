var expand = false;
var first = true;

$(window).ready(function () {

    $(document.body).height($(window).height());

    $("#expand").click(function () {
        $("#xxxx").toggleClass("nav_active");
        var nav = $("#ssub_nav");
        nav.toggleClass("small_nav");
        nav.height($(window).outerHeight());
        expand = !expand;

        if (expand) {
            $('html,body').animate({ scrollTop: 0 }, 500);
            $(document.body).css({
                "overflow-x": "hidden",
                "overflow-y": "hidden",
                "height": "100%"
            });
            $(document.body).bind('touchmove', false);
        } else {
            $(document.body).css({
                "overflow-x": "auto",
                "overflow-y": "auto",
                "height": "auto"
            });
            $(document.body).bind('touchmove', true);
        }
    });

    $("#next").click(function () {
        welcome_page_fade();
    });

    $("#home_nav").click(function () {
        welcome_page_fade();
    });
});


function welcome_page_fade() {
    $("#main").slideUp(500);
    $("footer").fadeOut(700, function () {

        if (!expand) {
            $(document.body).css({
                "overflow-x": "auto",
                "overflow-y": "auto",
                "height": "auto"
            });
        }
        $("#main").remove();
    });
}