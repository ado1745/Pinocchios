$(".a-1").on('click', function (e) {
    e.preventDefault();
    $(".regularPizzaDrop").slideToggle();
});
$(".a-2").on('click', function (e) {
    e.preventDefault();
    $(".sicilianPizzaDrop").slideToggle();
});
$(".a-3").on('click', function (e) {
    e.preventDefault();
    $(".subs").slideToggle();
});

$(".a-4").on('click', function (e) {
    e.preventDefault();
    $(".pasta").slideToggle();
});

$(".a-5").on('click', function (e) {
    e.preventDefault();
    $(".salad").slideToggle();
});
$(".a-6").on('click', function (e) {
    e.preventDefault();
    $(".dinner").slideToggle();
});



$(".menuPageNav").on('click', function () {
    $('.secondPage').click();
    return false;
})


$('.carousel').carousel({
    interval: 4000
})
