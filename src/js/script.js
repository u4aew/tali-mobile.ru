$(document).ready(function () {
    (function ($) {
        // Create a new instance of Slidebars
        var controller = new slidebars();
        // Initialize Slidebars
        controller.init();
        $('.js-open-mmenu-overlay').on('click', function (event) {
            event.preventDefault();
            event.stopPropagation();
            controller.open('mmenu-overlay');
        });

        $('.js-toggle-mmenu-overlay').on('click', function (event) {
            event.preventDefault();
            event.stopPropagation();
            controller.toggle('mmenu-overlay');
        });

        $('.js-close-mmenu-overlay').on('click', function (event) {
            event.preventDefault();
            event.stopPropagation();
            controller.close('mmenu-overlay');
        });

        $('.js-box-shadow').on('click', function (event) {
            event.preventDefault();
            event.stopPropagation();
            controller.close('mmenu-overlay');
            $(".wrapper").removeClass("js-wrapper-active");
            $(".js-box-shadow").removeClass("js-box-shadow-active");
        });
    })(jQuery);
});
$(document).ready(function () {
    $(".next-read").on("click", function(){
        var LongText = $(this).next();
        LongText.toggleClass("js-active-category-block___content");
    })
});