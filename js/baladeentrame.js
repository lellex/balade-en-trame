$(document).ready(function(){

    // Page nav
    $('.liens a').on('click', function(){
        var activePage = $(this).attr('class');
        $('.liens a').removeClass('active');
        $('.pages > div').removeClass('active');
        $(this).addClass('active');
        $('.pages #'+activePage).addClass('active');
    });

	var hash = $.trim( window.location.hash ).slice(1);
    if (hash) {
    	$('.liens a[href$="'+hash+'"]').trigger('click')
    } else {
    	$('.liens a:first').trigger('click');
    };

    // Schéma ourdissoir
    $(document).on('click', '.ourdissoir .points > div', function(){
        if ($(this).hasClass('active')) {
            $(this).find('.text').fadeOut()
            $(this).removeClass('active');   
        } else {
            $('.ourdissoir .points .text').fadeOut();  
            $(this).addClass('active').find('.text').fadeIn();   
        }
    });

    // Slider
    $('.slider').slick({
        arrows: false
    });

});