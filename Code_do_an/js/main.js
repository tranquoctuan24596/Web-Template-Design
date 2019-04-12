(function($) {
	$('.img-show').hover(function(){
        // Hover over code
        $(this).parent().find('.img-content-preview').fadeIn();
	}, function() {
	    $(this).parent().find('.img-content-preview').fadeOut();
	}).mousemove(function(e) {
	    var x = e.pageX - $(this).offset().left + 30; //Get X coordinates
	    var y = e.pageY - $(this).offset().top + 200; //Get Y coordinates
	    $(this).parent().find('.img-content-preview').css({ top: y, left: x})
	});	

})(jQuery);