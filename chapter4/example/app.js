var main = function () {
    "use strict";
    $(".comment-input input").on("keypress", function (event) {
        var $new_comment;
        if (event.keyCode === 13) {
            if ($(".comment-input input").val() !== "") {
                var $new_comment = $("<p>").text($(".comment-input input").val());
                $(".comments").append($new_comment);
                $(".comment-input input").val("");
            }
        }
    });
};
$(document).ready(main);