$(document).ready(function () {
    $("#hide").click(function () {
        $("#kotak").hide(1000);
    });

    $("#show").click(function () {
        $("#kotak").show(1000);
    });

    $("#fadeout").click(function () {
        $("#box").fadeOut(1000);
        $("#box1").fadeOut(1500);
        $("#box2").fadeOut(2000);
    });

    $("#fadein").click(function () {
        $("#box").fadeIn(1000);
        $("#box1").fadeIn(2000);
        $("#box2").fadeIn(3000);
    });
});
