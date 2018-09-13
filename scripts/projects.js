var expand = false;
var first = true;
var open = false;

$(window).ready(function () {

    $(document.body).height($(window).height());

    $("#expand").click(function () {
        $("#xxxx").toggleClass("nav_active");
        var nav = $("#sub_nav");
        nav.height($(window).outerHeight());
        nav.slideToggle();
        expand = !expand;

        if (expand) {
            $('html,body').animate({ scrollTop: 0 }, 500, function () {
                $("#home").addClass("home");
                $("#main").addClass("home");
            });
        } else {
            if (open) {
                $("#home").removeClass("home");
            } else {
                $("#main").removeClass("home");
            }
            $('body').css("background", "white");
        }
    });

    $("#next").click(function () {
        welcome_page_fade();
    });

    $("#home_nav").click(function () {
        welcome_page_fade();
    });

    var height = $(window).outerHeight() - $("#song_word").outerHeight() - $("#next").outerHeight();
    $("#sl").outerHeight(height);
    $("#solar").css("max-height", height);
    $("#solar").css("padding-top", (height - $("#solar").innerHeight()) / 2);

});


function welcome_page_fade() {
    $("footer").fadeOut(700, function () {
        open = true;
        if (!expand) {
            $("#home").toggleClass("home");
        }
        $("#main").slideUp(500);
    });
}