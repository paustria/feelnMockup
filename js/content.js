module.exports = function () {
    $(function() {
        $('#navbar-search').on('click', function () {
            $(this).parent().toggleClass('open');
            $('#container-search').toggleClass('hide');
        });

        $('.carousel-film').slick({
            infinite: true,
            lazyLoad: 'ondemand',
            slidesToShow: 3,
            slidesToScroll: 1
        });

        $('[data-toggle="popover"]').popover();
    });
}();