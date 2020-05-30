$(function() {
    $(".header-hover").hover(
        function() {

            $(this).find(".header-list__hover").css("background-color", "white");
            $(this).find(".header-list__hover").css("transition", "1.0s");

        },
        function() {

            $(this).find(".header-list__hover").css("background-color", "rgba(48, 36, 36, 1.0)");
            $(this).find(".header-list__hover").css("transition", "1.0s");
        }
    );

    $(".main-visual").hover(
        function() {
            $(".main-visual__txt").fadeOut(2000);
            $(".main-visual__changetxt").fadeIn(2000);
        },
        function() {
            $(".main-visual__txt").fadeIn(2000);
            $(".main-visual__changetxt").fadeOut(2000);
        }
    );

    $("#header-icon").click(
        function() {
            $(this).fadeOut();
            $("#change-icon").fadeIn();
            $("#change-menu").slideDown();

        }
    )

    $("#change-icon").click(
        function() {
            $(this).fadeOut();
            $("#header-icon").fadeIn();
            $("#change-menu").slideUp();
        }
    )
});
