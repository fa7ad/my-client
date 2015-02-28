(function(){
    jQuery(window).load(function(){
        $(document).foundation();
        $('#imageSlide').galleryView({
     		transition_interval: 2500,
     		panel_width: 400,
     		panel_height: 300,
     		enable_overlays: true,
     		panel_animation: 'crossfade',
     		autoplay: true,
     		filmstrip_position: 'right',
     		show_infobar: false,
		});
    });
})(jQuery);