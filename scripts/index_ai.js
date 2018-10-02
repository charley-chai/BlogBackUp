$("#highlight").click(function () {
    $("#highlight").addClass("highlight");
    $("#imgHl").attr("src", "/images/blogs/base/highlighter.svg");

    $("#imgPractice").attr("src", "/images/blogs/base/practice.svg");
    $("#imgTheory").attr("src", "/images/blogs/base/axis.svg");
    $("#theory").removeClass("theory");
    $("#practice").removeClass("practice");

});

$("#theory").click(function () {
    $("#theory").addClass("theory");
    $("#imgTheory").attr("src", "/images/blogs/base/unaxis.svg");

    $("#imgPractice").attr("src", "/images/blogs/base/practice.svg");
    $("#imgHl").attr("src", "/images/blogs/base/un_highlighter.svg");
    $("#highlight").removeClass("highlight");
    $("#practice").removeClass("practice");
});

$("#practice").click(function () {
    $("#practice").addClass("practice");
    $("#imgPractice").attr("src", "/images/blogs/base/unpractice.svg");

    $("#highlight").removeClass("highlight");
    $("#theory").removeClass("theory");
    $("#imgTheory").attr("src", "/images/blogs/base/axis.svg");
    $("#imgHl").attr("src", "/images/blogs/base/un_highlighter.svg");
});