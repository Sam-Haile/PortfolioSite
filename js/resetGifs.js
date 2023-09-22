$(function(){
    $(".img__container").mouseenter(function() {
        var gifUrl = $(this).data("gif") + "?ts=" + Date.now();
        $(this).find(".gameplay__gif").attr("src", gifUrl);
    })
    .mouseleave(function() {
        $(this).find(".gameplay__gif").attr("src", "");
    });
});