jQuery(document).ready(function ($) {
    var icon = $(".menu");
    var menu = $(".mobile-slider");
    var tl = new TimelineLite({ paused: true, reversed: true });
    tl.fromTo(
        ".mobile-slider",
        0.3,
        {
            x: 200,
            autoAlpha: 0
        },
        {
            x: 0,
            autoAlpha: 1,
            ease: Power4.easeOut
        }
    );
    tl.to(
        ".filter",
        0.3,
        {
            autoAlpha: 1
        },
        0
    );
    icon.click(function () {
        tl.play();
    });
    $(".mobile-slider-top").click(function () {
        tl.reverse();
    });
    // Also close slider when clicking outside of the menu
    $(".filter").click(function () {
        tl.reverse();
    });
});
