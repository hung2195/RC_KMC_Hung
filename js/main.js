$(document).ready(function(){
	$('.list_items .items').hover(function() {
            let url = $(this).find('.btn_news1');
            url.attr('src', url.attr('src').replace('-ovoff', '-ovon'));
        }, function() {
            let url = $(this).find('.btn_news1');
            url.attr('src', url.attr('src').replace('-ovon', '-ovoff'));
        });
	// hover img
 	$('.slider').slick({
			dots: true,
			autoplay: true,
			speed: 500,
			fade: true,
			cssEase: 'linear'
	  });
 	// slick slider
 	$("#page_top").click(function(){
			$('html, body').animate({scrollTop:0}, 'slow');
	});
	// page top
	var page_top= $('#page_top');
	$(window).scroll(function(){
	if (window.pageYOffset >= 100) {
		page_top.addClass("scroll");
	} else {
		page_top.removeClass("scroll");
		}
	});
	// page top amination
})