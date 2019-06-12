$(".a-1").on('click', function (e) {
    e.preventDefault();
    $(".regularPizzaDrop").toggle();
});
$(".a-2").on('click', function (e) {
    e.preventDefault();
    $(".sicilianPizzaDrop").toggle();
});
$(".a-3").on('click', function (e) {
    e.preventDefault();
    $(".subs").toggle();
});

$(".a-4").on('click', function (e) {
    e.preventDefault();
    $(".dropDownOptions").toggle();
});

$(".a-5").on('click', function (e) {
    e.preventDefault();
    $(".dropDownOptions").toggle();
});
$(".a-6").on('click', function (e) {
    e.preventDefault();
    $(".dropDownOptions").toggle();
});



$(".menuPageNav").on('click', function () {
    $('.secondPage').click();
    return false;
})


$('.carousel').carousel({
    interval: 4000
})