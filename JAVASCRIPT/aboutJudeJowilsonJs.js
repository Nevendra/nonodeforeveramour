

$( document ).ready(function() {
  	var judeImageDiv = $(".judeImage");
	var judeLookBook = judeImageDiv.find(".lookBook");
	var windowWidth = $(window).width();
	var nav = $(' nav ul');

	$('.dressesButton').click(function(){
		function fadeInImageGallery(){
			$('.imageGallery').fadeIn(1000);
		}
		$('.ladyImage').fadeOut(1000, fadeInImageGallery);
	})

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
