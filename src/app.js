(function () {
    jQuery(window).load(function () {
        $('#formT').hide().removeClass('hide');
        $(document).foundation();
        // Can also be used with $(document).ready()
        $('.flexslider').flexslider({
            animation: "slide",
            controlNav: "thumbnails"/*,
            after: function(){
                var active_rel = $('.flex-active-slide').attr('rel');
                $('.item-desc').removeClass('active');
                $(active_rel).addClass('active');
            }*/
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
            blur:   false,
            color: 'white',
            opacity: 0.8,
            transition: '0.3s',
            scrolllock: true
        });
        /*timer(16000, function(s){
            $('.counter').text(s);
        }, function(){
            $('#my_popup').popup('hide');
        });*/
        $('#close_popup').click(function(){
            $('#my_popup').popup('hide');
        });
    });
    function timer(time,update,complete) {
        var start = new Date().getTime();
        var interval = setInterval(function() {
            var now = time-(new Date().getTime()-start);
            if( now <= 0) {
                clearInterval(interval);
                complete();
            }
            else update(Math.floor(now/1000));
        },100); // the smaller this number, the more accurate the timer will be
    }
})(jQuery);