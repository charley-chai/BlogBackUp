$("#highlight").click(function () {
    $("#highlight").addClass("highlight");
    $("#imgHl").attr("src", "/images/blogs/base/highlighter.svg");

    $("#imgPractice").attr("src", "/images/blogs/base/practice.svg");
    $("#imgTheory").attr("src", "/images/blogs/base/axis.svg");
    $("#imgTittle").attr("src", "/images/blogs/base/unbook-cover.svg");
    $("#theory").removeClass("theory");
    $("#practice").removeClass("practice");
    $("#tittle").removeClass("tittle");
});

$("#theory").click(function () {
    $("#theory").addClass("theory");
    $("#imgTheory").attr("src", "/images/blogs/base/unaxis.svg");

    $("#imgPractice").attr("src", "/images/blogs/base/practice.svg");
    $("#imgHl").attr("src", "/images/blogs/base/un_highlighter.svg");
    $("#imgTittle").attr("src", "/images/blogs/base/unbook-cover.svg");
    $("#highlight").removeClass("highlight");
    $("#practice").removeClass("practice");
    $("#tittle").removeClass("tittle");
});

$("#practice").click(function () {
    $("#practice").addClass("practice");
    $("#imgPractice").attr("src", "/images/blogs/base/unpractice.svg");

    $("#highlight").removeClass("highlight");
    $("#theory").removeClass("theory");
    $("#tittle").removeClass("tittle");
    $("#imgTheory").attr("src", "/images/blogs/base/axis.svg");
    $("#imgHl").attr("src", "/images/blogs/base/un_highlighter.svg");
    $("#imgTittle").attr("src", "/images/blogs/base/unbook-cover.svg");
});

$("#tittle").click(function () {
    $("#tittle").addClass("tittle");
    $("#imgTittle").attr("src", "/images/blogs/base/book-cover.svg");

    $("#highlight").removeClass("highlight");
    $("#theory").removeClass("theory");
    $("#practice").removeClass("practice");
    $("#imgPractice").attr("src", "/images/blogs/base/practice.svg");
    $("#imgTheory").attr("src", "/images/blogs/base/axis.svg");
    $("#imgHl").attr("src", "/images/blogs/base/un_highlighter.svg");
});