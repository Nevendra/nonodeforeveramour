$(document).ready(function(){

	var windowWidth = $(window).width();
	var nav = $(' nav ul');
	$('.hamburger').click(function(){
		$('nav ul').slideToggle(1000)
	})

			function windowResize() {
				var width = $(window).width();
				var menu = $('nav ul');

				if(width > 949 && nav.is(':hidden')){
					nav.removeAttr('style');
				}
			};

			$(window).resize(windowResize);

});