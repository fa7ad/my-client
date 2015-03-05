(function () {
    jQuery(window).load(function () {
        $('#formT').hide().removeClass('hide');
        $(document).foundation();
        $('.flexslider').flexslider({
            animation: "slide",
            controlNav: "thumbnails"
        });
        $('a[href="#formT"]').click(function () {
            $(this).html('<i class="fi-arrow-down"></i> নিচের ফর্মটি পূরণ করুন');
            $('#formT').slideDown(2500).show();
            $('html, body').animate({
                scrollTop: $("footer").offset().top
            }, 2500);
        });
        $('#my_popup').popup({
            autoopen: true,
            color: 'white',
            opacity: 0.8,
            transition: '0.3s',
            scrolllock: true
        });
        $('#close_popup').click(function(){
            $('#my_popup').popup('hide');
        });
        setTimeout(function(){
            $('#my_popup').popup('hide');
        }, 30000);
    });
})(jQuery);