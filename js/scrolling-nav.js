//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".w-nav").addClass("top-nav-collapse");
    } else {
        $(".w-nav").removeClass("top-nav-collapse");
    }
});

