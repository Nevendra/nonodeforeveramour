$(document).ready(function(){
	
	var windowWidth = $(window).width();
	var nav = $(' nav ul');
	var width = $(window).width();
	$('.hamburger').click(function(){
		$('nav ul').slideToggle(1000)
	})

			function windowResize() {
				var width = $(window).width();

				if(width > 949 && nav.is(':hidden')){
					nav.removeAttr('style');
				}
			};

			$(window).resize(windowResize)

});
