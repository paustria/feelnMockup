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
            slidesToScroll: 3,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        $('[data-toggle="popover"]').popover();
    });
}();