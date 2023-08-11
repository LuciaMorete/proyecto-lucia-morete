function toggleCarouselVisibility() {
    if ($(window).width() >= 992) {
        $('#carouselExample').show();
        $('#carouselExampleMobile').hide();
    } else {
        $('#carouselExample').hide();
        $('#carouselExampleMobile').show();
    }
}
jQuery(document).ready(function () {
    toggleCarouselVisibility();
});
$(window).on('resize', function () {
    toggleCarouselVisibility();
});