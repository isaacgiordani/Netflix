$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        400: {
            items: 2
        },
        600: {
            items: 3
        },
        750: {
            items: 4
        },
        950: {
            items: 5
        },
        1200: {
            items: 6
        }
    }
})

$(document).ready(function() {

    $('a[name=modal]').click(function(e) {
        e.preventDefault();
        var id = $(this).attr('href');
        var maskHeight = $(document).height();
        $('#mask').css({ 'height': maskHeight });
        $('#mask').fadeIn(1000);
        $('#mask').fadeTo("slow", 0.8);
        $(id).fadeIn(2000);
    });

    $('.window .close').click(function(e) {
        e.preventDefault();
        $('#mask, .window').hide();
    });

    $('#mask').click(function() {
        $(this).hide();
        $('.window').hide();
    });
});