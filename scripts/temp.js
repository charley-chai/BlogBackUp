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
                $("header").css("opacity", "1");
                $(".content").addClass("hidden");
            });
        } else {
            $("header").css("opacity", "0.8");
            $(".content").removeClass("hidden");
        }
    });
});