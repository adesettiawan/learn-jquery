$(document).ready(function () {
    $("#click").click(function () {
        alert("ini saya diklik");
    });

    $("#dbclick").dblclick(function () {
        $(this).css("background-color", "red");
    });

    $("#mouse").mouseleave(function () {
        $(this).css("background-color", "blue");
    });

    $("#mouse").mouseenter(function () {
        $(this).css("background-color", "green");
    });

    $("#keydown").keydown(function () {
        $("#message_keydown").text($(this).val());
    });

    $("#keyup").keyup(function () {
        $("#message_keyup").text($(this).val());
    });
});
