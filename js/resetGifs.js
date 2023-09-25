$(function(){
    $(".img__container").each(function() {
        // Preload the GIF for each container
        var gifUrl = $(this).data("gif");
        var gifImage = new Image();
        gifImage.src = gifUrl;

        // Once the GIF is loaded, store it in a data attribute for immediate use on hover
        gifImage.onload = function() {
            $(this).data("loaded-gif", gifUrl);
        }.bind(this); // Bind 'this' to refer to the img__container element inside the onload function
    })
    .mouseenter(function() {
        if ($(this).data("loaded-gif")) {
            var $gifImg = $(this).find(".gameplay__gif");
            $gifImg.data("original-alt", $gifImg.attr("alt")); // Store the original alt
            $gifImg.attr("alt", ""); // Remove the alt
            $gifImg.attr("src", $(this).data("loaded-gif"));
        }
    })
    .mouseleave(function() {
        var $gifImg = $(this).find(".gameplay__gif");
        $gifImg.attr("src", "");
        if ($gifImg.data("original-alt")) {
            $gifImg.attr("alt", $gifImg.data("original-alt")); // Restore the original alt
        }
    });
});
