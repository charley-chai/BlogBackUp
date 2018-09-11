var expand = false;

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
                $("#class_nav").addClass("hidden");
                $("#contact").addClass("hidden");
                $("#main").addClass("hidden");
                $("header").css("opacity", "1");
            });
        } else {
            $("#contact").removeClass("hidden");
            $("#main").removeClass("hidden");
            $("#class_nav").removeClass("hidden");
            $("header").css("opacity", "0.8");
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
    $("footer").fadeOut(700, function () {
        open = true;
        if (!expand) {
            $("#home").toggleClass("home");
        }
        $("#main").slideUp(500);
    });
}