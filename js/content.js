module.exports = function () {
    $(function() {
        $('#navbar-search').on('click', function () {
            $(this).parent().toggleClass('open');
            $('#container-search').toggleClass('hide');
        });
    });
}();