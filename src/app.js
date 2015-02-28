(function () {
    jQuery(window).load(function () {
        $('#formT').hide().removeClass('hide');
        $(document).foundation();
        // Can also be used with $(document).ready()
        $('.flexslider').flexslider({
            animation: "slide",
            controlNav: "thumbnails"
        });
        // changing iframe's shadow
        $("iframe .ss-form-container").css('box-shadow', 'none');
        $('a[href="#formT"]').click(function(){
            $(this).hide();
            $('#formT').slideDown(2500).show();
        });
    });
})(jQuery);